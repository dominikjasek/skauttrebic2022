// read lines from data.txt and migrate num dates to date

const fs = require('fs');
const path = require('path');


const lines = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8').split('\n');
const newLines = lines.map(line => {
  const numericLine = Number(line)
  if (isNaN(numericLine)) {
    return;
  }
  const date = new Date(numericLine);
  // add 2 hours to that
  date.setHours(date.getHours() + 2);
  return date.toISOString();
}).filter(Boolean)

newLines.pop()

console.log('length', newLines.length);
console.log(newLines.join('\n'));
