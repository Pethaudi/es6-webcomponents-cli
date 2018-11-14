#!/usr/bin/env node

const fs = require("./../services/FileManager.js");
const data = require("./Strings.js");

let homefolder = "./";
let projectname = "";
let [,,...args] = process.argv;

console.log(process.cwd());
console.log("found the file: " + fs.findFile("index.js"));
/*function main(args) {

}*/