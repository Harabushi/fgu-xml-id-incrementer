<h1 align="center">Fantasy Grounds Unity XML id tag Incrementer</h1>

## Description
This app can take an xml input and change any <id> tags (and their closing tags) and change them to <id-0000x> iincrementing upwards. primarily for use with Fantasy Grounds Unity, but great if you find other uses for it and please let me know!
  

## Table of Contents   
* [Usage](#usage)
* [Installation](#installation)
* [Questions](#Questions)
* [License](#license)


## Usage
To use this app:

Running "node change-tags.js" will run with default everything. The defaults for the input file is is "input.xml", and this file should be in the base folder. The default for output is "output.xml" and will be created in the output folder. Id increment default starts at 1 for "<id-00001></id-00001>". 

You can pass up to three arguments into the command line as you run "node change-tags.js". The first argument is the name(or relative location and name) of the input file. The second is to change the name of the output file(it should still be placed into the output folder). The third is to start the count higher up, so "5" would change the first tag into "<id-00005></id-00005>".

So for example:
"node change-tags.js myFile.xml myNewFile.xml 4"
Would take in "myFile.xml" from the base folder, increment the id tags starting at "<id-00004>...", then write the new file as "myNewFile.xml" into the output folder.
 
## Installation
As you may have guessed in the usage section, you need node.js installed on your computer, see their site for information. It does not require any external modules, we just need access to node's built-in fs module.

## Contributors
[Colby Harris](https://github.com/Harabushi)
<br />
[Michael Rudi](https://github.com/kanbie)

## Questions   
Please reach out to me on [GitHub](https://github.com/Harabushi) or by email at harabushi.creations@gmail.com for any additional questions.  

## License
[![License: (MIT)](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)

MIT License

Copyright (c) 2022 Colby Harris

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
