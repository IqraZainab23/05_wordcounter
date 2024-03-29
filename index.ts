#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright("Word Counter"))

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: (chalk.green("Enter your sentence to count the word: "))
    }
])

const words = answers.Sentence.trim().split(" ")
console.log(chalk.cyan(`Your sentence word count is ${words.length}`))