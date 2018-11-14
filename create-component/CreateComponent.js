#!/usr/bin/env node

const fs = require("./../services/FileManager.js");
const data = require("./Strings.js");

let homefolder = "./";
let projectname = "";
let [,,...args] = process.argv;

console.log(__dirname)
console.log(fs.fromDir("index.js"));

function main(args) {

}

