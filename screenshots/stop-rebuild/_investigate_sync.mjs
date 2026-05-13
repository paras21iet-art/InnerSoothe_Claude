/**
 * Voice/orb sync investigation.
 * Simulates speechSynthesis FIFO queuing behavior with realistic
 * per-utterance durations (at rate 0.82, typical en-US TTS).
 */

const DURATIONS = {
  'In':          220,
  'Breathe in':  560,
  'Hold':        350,
  'Out':         210,
  'Breathe out': 640,
  'One':         370,
  'Two':         340,
  'Three':       420,
  'Four':        380,
};

function simulatePhase(phaseName, withCancel) {
  // Items queued: phase name at t=0, then counts at 400/1400/2400/3400
  const items = [
    { scheduleAt: 0,    text: phaseName },
    { scheduleAt: 400,  text: 'One'     },
    { scheduleAt: 1400, text: 'Two'     },
    { scheduleAt: 2400, text: 'Three'   },
    { scheduleAt: 3400, text: 'Four'    },
  ];

  const results = [];
  let cursor = 0; // when current speech ends (ms from phase start)

  for (const item of items) {
    const dur = DURATIONS[item.text] || 400;

    if (withCancel) {
      // cancel() clears queue and starts immediately at scheduled time
      const playAt = item.scheduleAt;
      results.push({
        text: item.text,
        scheduleAt: item.scheduleAt,
        playAt,
        endsAt: playAt + dur,
        delay: 0,
        cutPrev: item.scheduleAt < cursor ? cursor - item.scheduleAt : 0,
      });
      cursor = playAt + dur;
    } else {
      // No cancel: utterance waits for queue to clear
      const playAt = Math.max(item.scheduleAt, cursor);
      results.push({
        text: item.text,
        scheduleAt: item.scheduleAt,
        playAt,
        endsAt: playAt + dur,
        delay: playAt - item.scheduleAt,
        cutPrev: 0,
      });
      cursor = playAt + dur;
    }
  }
  return results;
}

function report(label, phaseName, withCancel) {
  const rows = simulatePhase(phaseName, withCancel);
  const mode = withCancel ? 'WITH cancel()' : 'WITHOUT cancel() [current]';
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Phase voice: "${phaseName}" | ${mode}`);
  console.log(`${'─'.repeat(60)}`);
  console.log(
    'Text'.padEnd(14),
    'Sched'.padStart(6),
    'PlayAt'.padStart(8),
    'EndsAt'.padStart(8),
    'Delay'.padStart(7),
    'Note'.padStart(10)
  );
  console.log('─'.repeat(60));
  for (const r of rows) {
    const note = r.delay > 0
      ? `⚠  +${r.delay}ms late`
      : r.cutPrev > 0
        ? `✂  cuts prev ${r.cutPrev}ms early`
        : '✓';
    console.log(
      `"${r.text}"`.padEnd(14),
      `${r.scheduleAt}ms`.padStart(6),
      `${r.playAt}ms`.padStart(8),
      `${r.endsAt}ms`.padStart(8),
      r.delay > 0 ? `+${r.delay}ms`.padStart(7) : '—'.padStart(7),
      note
    );
  }
  // Check if "Four" overlaps with phase boundary at 4000ms
  const four = rows[rows.length - 1];
  const orbDone = 4000;
  if (four.endsAt > orbDone) {
    console.log(`\n  ⚠  "Four" ends at ${four.endsAt}ms — ${four.endsAt - orbDone}ms AFTER orb completes (4000ms).`);
    console.log(`     User hears "Four" while orb has ALREADY transitioned to next phase.`);
  } else {
    console.log(`\n  ✓  "Four" ends at ${four.endsAt}ms — ${orbDone - four.endsAt}ms before orb completes (4000ms).`);
  }
}

// ── Investigation: current code uses voice 'In', no cancel ──────────────
report('current',    'In',         false);
report('current',    'In',         true);

// ── Proposed change: voice 'Breathe in', without cancel ─────────────────
report('proposed',   'Breathe in', false);

// ── Proposed change: voice 'Breathe in', WITH cancel ────────────────────
report('proposed',   'Breathe in', true);

// ── Summary ─────────────────────────────────────────────────────────────
console.log(`\n${'═'.repeat(60)}`);
console.log('SUMMARY');
console.log(`${'─'.repeat(60)}`);
console.log('"In" without cancel:        "One" delayed by', simulatePhase('In', false)[1].delay, 'ms');
console.log('"In" with cancel:           "One" delayed by', simulatePhase('In', true)[1].delay, 'ms');
console.log('"Breathe in" without cancel: "One" delayed by', simulatePhase('Breathe in', false)[1].delay, 'ms');
console.log('"Breathe in" with cancel:   "One" delayed by', simulatePhase('Breathe in', true)[1].delay, 'ms (cuts "Breathe in" after', simulatePhase('Breathe in', true)[1].scheduleAt, 'ms)');
