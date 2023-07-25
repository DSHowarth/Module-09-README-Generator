const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([{
    type: 'input',
    message: 'Please add a title for your README',
    name: 'title'
    },{
    type: 'input',
    message: 'Please input your description',
    name: 'desc'
    },{
    type: 'input',
    message: 'Please input your installation instructions',
    name: 'installInstr'
    },{
    type: 'input',
    message: 'Please input your usage instructions',
    name: 'usageInstr'
    },{
    type: 'input',
    message: 'Please input your contributing guidelines',
    name: 'contributingInstr'
    },{
    type: 'input',
    message: 'Please input your test instructions',
    name: 'testInstr'
    },{
    type: 'input',
    message: 'Please input your license, as precisely as possible',
    name: 'license'
    },{
    type: 'input',
    message: 'Please input your Github username',
    name: 'userName'
    },{
    type: 'input',
    message: 'Please input a contact email',
    name: 'email'
    }])
    .then(function(response){
        const {title, desc, installInstr, usageInstr, contributingInstr, testInstr, license, userName, email} = response
        const template = 
`# ${title}
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

        fs.writeFile('./newFiles/README.md', template, (err) =>
        err ? console.error(err) : console.log('README created'));
    })

