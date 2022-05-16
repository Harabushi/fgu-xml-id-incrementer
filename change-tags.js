let fs = require('fs');

let output = '';
let currentNum = 0;
let newXml = '';

function num() {
  currentNum++;
  output = ('0000' + currentNum).slice(-5)
  // console.log(output);
  return;
}

function readWriteSync() {
  // this should be the name of the input file
  let data = fs.readFileSync('Threeitemsexport.xml', 'utf-8');

  data.split(/\r?\n/).forEach(line => {
    // console.log(`Line from file: ${line}`)
    if (line.match('<id>')) {
      num();
      let newValue = line.replace('<id>', `<id-${output}>`)
      newXml += `\n${newValue}`;
      console.log(newXml);
    } else if (line.match('</id>')) {
      currentNum--;
      num();
      let newValue = line.replace('</id>', `</id-${output}>`)
      newXml += `\n${newValue}`;
      console.log(newXml);
    } else {
      newXml += `\n${line}`;
    }
  })
  // this should be whatever you want the name of the output file to be
  fs.writeFileSync('./output/output.xml', newXml, 'utf-8');
  // console.log('readFileSync complete');
}

readWriteSync();
