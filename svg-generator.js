const inquirer = require('inquirer');

function validateText(input) {
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
    validate: validateText
  },
  {
    name: "textColor",
    message: "Enter a text color or hex code : ",
    type: "input",
    validate: validateColor
  },
  {
    name: 'shape',
    message: 'Select a shape',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    name: "shapeColor",
    message: "Enter a shape color or hex code: ",
    type: "input",
    validate: validateColor,
  }
]

const init = async () => {
  const data = await inquirer.prompt(questions)
  
}
init()

module.exports = {
  validateText,
  validateColor,
}