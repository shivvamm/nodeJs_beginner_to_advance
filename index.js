#!/usr/bin/env node 


 // A hashbang is a special comment placed at the top of a script that tells the operating system which interpreter to use when running the script. In the context of a Node.js CLI app, the hashbang tells the machine to use Node.js as the interpreter to execute the JS file. 

const note = process.argv[2];
const newNote ={
content : note,
id:Date.now()
}
console.log(newNote);