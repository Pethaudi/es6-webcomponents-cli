#!/usr/bin/env node

const fs = require("./../services/FileManager.js");
const data = require("./Strings.js");

let homefolder = "./";
let projectname = "";
let [,,...args] = process.argv;

main(args);

function main(args) {
    let homefolder = "";
    let electron = false;

    for(let i = 0; i < args.length; i++) {
        if(args[i] === "-e") {
            electron = true;
        } else {
            homefolder = args[i];
        }
    }

    createHomefolder(homefolder);
    createDirectories();
    createFiles(electron);
}

function createHomefolder(name) {
    if(name === "") {
        projectname = fs.getParentFolderName();
        return;
    }

    homefolder += name + "/";
    projectname = name;
    fs.createDirectory(homefolder);
}

function createDirectories() {
    fs.createDirectory(homefolder + "src");
    fs.createDirectory(homefolder + "src/components");
}

function createFiles(electron) {
    if(electron) {
        fs.createFile(homefolder + "src/index.html", data.indexHtmlElectron(projectname));
        fs.createFile(homefolder + "package.json", data.packageJsonElectron(projectname));
        fs.createFile(homefolder + "index.js", data.indexJs());
    }
    else {
        fs.createFile(homefolder + "src/index.html", data.indexHtml(projectname));
        fs.createFile(homefolder + "package.json", data.packageJson(projectname));
    }

    fs.createFile(homefolder + "webpack.config.js", data.webpackConf());
    fs.createFile(homefolder + "src/styles.css");
    fs.createFile(homefolder + "src/main.js");
}