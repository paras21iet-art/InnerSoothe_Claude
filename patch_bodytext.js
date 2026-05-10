const fs = require('fs');
const path = 'C:/Users/Admin/Documents/GitHub/InnerSoothe_Claude/innersoothe_wireframes_latest.html';
let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

let changed = 0;

// Apply to Check-In HTML section (lines 7127-7757, 0-indexed 7126-7756)
// AND ci2BuildFamilies + ci2RefreshUI (lines ~16590-16700, 0-indexed)
const ranges = [[7126, 7756], [16580, 16710]];

for (const [start, end] of ranges) {
  for (let i = start; i <= end; i++) {
    const orig = lines[i];
    let line = orig;

    // Primary body text → #2F241E (solid, max readability)
    line = line.replace(/color:rgba\(30,20,8,0\.90\)/g, 'color:#2F241E');
    line = line.replace(/color:rgba\(30,20,8,0\.88\)/g, 'color:#2F241E');
    line = line.replace(/color:rgba\(30,20,8,0\.85\)/g, 'color:#2F241E');
    line = line.replace(/color:rgba\(30,20,8,0\.82\)/g, 'color:#2F241E');
    line = line.replace(/color:rgba\(30,20,8,0\.80\)/g, 'color:#2F241E');

    // Secondary body text → #3F2E24 (dark warm brown)
    line = line.replace(/color:rgba\(30,20,8,0\.75\)/g, 'color:#3F2E24');
    line = line.replace(/color:rgba\(30,20,8,0\.72\)/g, 'color:#3F2E24');
    line = line.replace(/color:rgba\(30,20,8,0\.70\)/g, 'color:#3F2E24');
    line = line.replace(/color:rgba\(30,20,8,0\.65\)/g, 'color:#3F2E24');
    line = line.replace(/color:rgba\(30,20,8,0\.55\)/g, 'color:#3F2E24');
    line = line.replace(/color:rgba\(30,20,8,0\.50\)/g, 'color:#3F2E24');

    // JS template literal string colors (ci2BuildFamilies)
    line = line.replace(/'rgba\(30,20,8,0\.85\)'/g, "'#2F241E'");
    line = line.replace(/'rgba\(30,20,8,0\.90\)'/g, "'#2F241E'");

    if (line !== orig) changed++;
    lines[i] = line;
  }
}

console.log('Lines modified:', changed);
fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('Done.');
