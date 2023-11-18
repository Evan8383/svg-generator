const inquirer = require('inquirer');
const fs = require('fs').promises;
const { createShape } = require('./utils/shapes')

const validateText = (input) => {
  if (input.length > 3) {
    return 'Your entry has too many characters'
  }
  return true
}
const validateColor = (input) => {
  const inputCheck = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g;
  if (input.split('').includes('#')) {
    if (inputCheck.test(input)) {
      return true
    }
    return 'Invalid hex color'
  }
  return true
}
let questions = [
  {
    name: 'text',
    message: "Enter up to three characters: ",
    type: 'input',
    default: 'aaa',
    validate: validateText
  },
  {
    name: "textColor",
    message: "Enter a text color or hex code : ",
    type: "input",
    default: 'black',
    validate: validateColor
  },
  {
    name: 'shape',
    message: 'Select a shape',
    type: 'list',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    name: "shapeColor",
    message: "Enter a shape color or hex code: ",
    type: "input",
    default: 'white',
    validate: validateColor,
  }
]

const createSvg = (fileName, data) => {
  fs.writeFile(`./${fileName}.svg`, data)
}

const init = async () => {
  const data = await inquirer.prompt(questions)
  const { text, shape } = data
  // { text: 'EHB', textColor: 'red', shape: 'Circle', shapeColor: 'black' }
  createSvg(`${text}-${shape}`, 'test')
}
init()

module.exports = {
  validateText,
  validateColor,
}