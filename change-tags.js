const fs = require('fs');

const args = process.argv.slice(2);

let currentNum = args[2] ? args[2] - 1 : 0;
let output = '';
let newXml = '';

function num() {
  currentNum++;
  output = ('0000' + currentNum).slice(-5)
  return;
}

function readWriteSync() {

  if (isNaN(args[2])) {
    console.log("arguments should be in order of input filename, output filename, increment start(num)");
    return;
  };

  // this should be the name of the input file, default to input.xml
  let data = fs.readFileSync(args[0] ? `${args[0]}` : 'input.xml', 'utf-8');

  data.split(/\r?\n/).forEach(line => {
    if (line.match('<id>')) {
      num();
      let newValue = line.replace('<id>', `<id-${output}>`)
      newXml += `\n${newValue}`;
    } else if (line.match('</id>')) {
      currentNum--;
      num();
      let newValue = line.replace('</id>', `</id-${output}>`)
      newXml += `\n${newValue}`;
    } else {
      newXml += `\n${line}`;
    }
  })
  // this should be whatever you want the name of the output file to be, default to output.xml
  fs.writeFileSync(args[1] ? `./output/${args[1]}` : './output/output.xml', newXml, 'utf-8');
}

readWriteSync();
