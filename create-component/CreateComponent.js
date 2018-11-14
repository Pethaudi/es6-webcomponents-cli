#!/usr/bin/env node

const fs = require("./../services/FileManager.js");
const data = require("./Strings.js");

let homefolder = "./";
let projectname = "";
let [,,...args] = process.argv;
let electron = isElectronApp();

function main(args) {

}

function isElectronApp() {
	let package = fs.findFile("package.json");
	if(package === "")
		return false;
	return fs.isElectronApp(package);
}

function createFiles() {
	
}

function registerComponent() {
	
}