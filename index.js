const fs = require('fs');
const inquirer = require('inquirer');
const licenses = [
    'MIT License',
    'GNU General Public License v3.0', 
    'Apache License 2.0', 
    'Mozilla Public License 2.0', 
    'The Unlicense']

//prompt user for README information
inquirer.prompt([{
    type: 'input',
    message: 'Please add a title for your README:',
    name: 'title'
    },{
    type: 'input',
    message: 'Please input your description:',
    name: 'desc'
    },{
    type: 'input',
    message: 'Please input your installation instructions:',
    name: 'installInstr'
    },{
    type: 'input',
    message: 'Please input your usage instructions:',
    name: 'usageInstr'
    },{
    type: 'input',
    message: 'Please input your contributing guidelines:',
    name: 'contributingInstr'
    },{
    type: 'input',
    message: 'Please input your test instructions:',
    name: 'testInstr'
    },{
    type: 'number',
    message: `Please pick your license from the numbered list:
        0: MIT License
        1: GNU General Public License v3.0
        2: Apache License 2.0
        3: Mozilla Public License 2.0
        4: The Unlicense
    Enter license number (0-4):`,
    name: 'licenseNum'
    },{
    type: 'input',
    message: 'Please input your Github username:',
    name: 'userName'
    },{
    type: 'input',
    message: 'Please input a contact email:',
    name: 'email'
    }])
    .then(function(response){
        const {title, desc, installInstr, usageInstr, contributingInstr, testInstr, licenseNum, userName, email} = response
        //Confirm that license selection is a whole number between 0 and 4
        if (!Number.isInteger(licenseNum) || licenseNum < 0 || licenseNum > 4){
            console.log('Sorry, your license selection must be a number from the list.')
            return;
        }
        //reformat license name for use in badge URL
        licenseUrl = licenses[licenseNum].split(' ').join('_');
        //ReadME template
        const template = 
`# ${title}
![License Badge](https://img.shields.io/badge/${licenseUrl}-orange)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

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

Governed under ${licenses[licenseNum]}.

## Questions

This repo was created by https://github.com/${userName}. 

Questions? Contact them at ${email}.
`
        //Create new README file with the completed template
        fs.writeFile('./newREADME/README.md', template, (err) =>
        err ? console.error(err) : console.log('README created'));
    })

