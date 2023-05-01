// Inquirer (node package manager) import
const inquirer = require('inquirer');
const path = require('path');
// File system module (node package manager) import
const fs = require('fs');
const svggenerator = require('./lib/svggenerator');

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");



const questions = [
{
    type: "input",
    name: "text",
    message: "Enter the text for the logo. Must not be more than 3 characters."
},

{
    type: "input",
    name: "color",
    message: "Enter a text color. This can be a color keyword or a hexadecimal value."
},

{
    type: "list",
    name: "shape",
    message: "Select a shape for the logo",
    choices: ["circle", "square", "triangle"]
},

{
    type: "input",
    name: "shape_color",
    message: "Enter a shape color.This can be a color keyword or a hexadecimal value."
}, 

]

let shape;

function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
     switch (answers.shape) {
         case "circle": 
            shape = new Circle();
         break;
            case "square":
                shape = new Square();
            break;
            case "triangle":
                shape = new Triangle();
            break;
     }   
   

     //create new svg object with text and shape
const svg = new svggenerator.SVG();
svg.setText(answers.text, answers.color);
shape.setColor(answers.shape_color);
svg.setShape(shape);

const svgString = svg.render();
return writeToFile("logo.svg", svgString)
    })

//function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, (err) => {
        if (err)
        return console.log(err);
        else {
            console.log("Success! Generated logo.svg");
        }
        
// console.log(answers);

    });
    }

 writeToFile (svggenerator.SVG, svgString);

}

// Function call to initialize app
init();