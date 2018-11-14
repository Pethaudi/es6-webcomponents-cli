#!/usr/bin/env node

const fs = require("./../services/FileManager.js");

let homefolder = "./";

createHomefolder("testproject")

function main(args) {
    
}

function createHomefolder(name) {
    homefolder += name + "/";
    fs.createDirectory(homefolder);
}

function createDirectories() {
    fs.createDirectory(homefolder + "src");
    fs.createDirectory(homefolder + "src/components");
}