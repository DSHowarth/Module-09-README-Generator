const fs = require('fs');
const inquirer = require('inquirer');

const template = `
#${title}
![License Badge](https://img.shields.io/badge/${license})

## Description

${desc}

## Installation

${installInstr}

## Usage

${usageInstr}

## Contributing

${contributingInstr}

## Tests

${testInstr}

## License

${license} 

## Questions

This repo was created by https://github.com/${userName}. 

Questions? Contact them at ${email}.
`