# SVG Logo Generator

The SVG Logo Generator is a Node.js script that provides an interactive way to generate SVG logos with customizable text, colors, and shapes. The script employs the Inquirer library for a user-friendly command-line interface and supports the creation of logos with different shapes, including circles, squares, and triangles.

## Description

The main part of the script (`index.js`) prompts the user with a series of questions using Inquirer to collect input for text, text color, shape, and shape color. It then uses this input to generate an SVG logo and saves it to the `./examples` directory.

# Table of Contents
1) [Installation Steps](#installation-steps)
    1) [Prerequisites](#prerequisites)
    2) [Clone the Repository](#clone-the-repository)
    3) [Navigate to the Project Directory](#navigate-to-the-project-directory)
    4) [Install Dependencies](#install-dependencies)
    5) [Run the Script](#run-the-script)
2) [Validation](#validation)
3) [Shapes](#shapes)
4) [Utility Functions](#utility-functions)
5) [Testing with Jest](#testing-with-jest)

## Installation Steps

Follow these steps to install and run the SVG Logo Generator:

### Prerequisites

Ensure you have Node.js installed on your machine. If not, you can download and install it from the [Node.js website](https://nodejs.org/).

### Clone the Repository
Clone the SVG Logo Generator repository to your local machine using the following command:
```
git clone https://github.com/Evan8383/svg-generator
```

### Navigate to the Project Directory
Move into the project directory with the following command:
```
cd svg-logo-generator
```

### Install Dependencies
Install the required dependencies by running the following command:
```
npm install
```
This will download and install the necessary packages specified in the package.json file.

### Run the Script
Execute the script to generate an SVG logo by entering the following command:
```
node index.js
```

## Shapes
The code includes a set of classes (`Shape`, `Circle`, `Square`, and `Triangle`) representing different shapes. Each shape class extends the base `Shape` class and defines methods to set the shape properties within an SVG string.

## Utility Functions
- `selectShape`: A function that takes user input and returns an instance of the corresponding shape class.
- `createShape`: A function that takes user input and generates an SVG string for the selected shape.

## Testing with Jest

### Running test cases
Run your Jest tests using the following command:
```
npm test
```
Test script currently uses --forceExit flag to force quit tests due to CL prompts.

Test files are located in the `./test` directory. 

## Test Cases

### Validate Entered Logo Text

#### Test Case 1: String Length Exceeds 3 Characters
- **Input:** 'aaaa'
- **Expected Output:** 'Your entry has too many characters'
- **Test:** Validates that an error message is returned when the string length exceeds 3 characters.

#### Test Case 2: String Length 3 Characters or Less
- **Input:** 'aaa'
- **Expected Output:** true
- **Test:** Validates that the function returns true when the input string length is 3 characters or less.

### Validate Entered Color

#### Test Case 1: Invalid Hex Color
- **Input:** '#12' or '#12345'
- **Expected Output:** 'Invalid hex color'
- **Test:** Validates that an error message is returned for an invalid hex color.

#### Test Case 2: Valid Hex Color
- **Input:** '#123' or '#F121212'
- **Expected Output:** true
- **Test:** Validates that the function returns true when a valid hex color is entered.


### Validation functions
The script includes validation functions (`validateText` and `validateColor`), located in the index.js file, to ensure that the user's input adheres to certain criteria. For example, it checks the length of the entered text and verifies that the color input is a valid hex color code.