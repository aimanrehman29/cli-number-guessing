#! /usr/bin/env node

import inquirer from "inquirer"

const random_number =Math.floor(Math.random()*1010);


const answers  =await inquirer.prompt ([
   {
     name:"userguessnumber",
     type: "number",
     message:"guess a number between 0-10",
   }
]);
if ( answers.userguessnumber === random_number){
    console.log ("congratulation ! your guess is correct.");
}else{
    console.log("Ohno! it's wrong");
}
