#!/usr/bin/env node

const fs = require("./../services/FileManager.js");
const data = require("./Strings.js");

let componentname = "";
let [,,...args] = process.argv;
let electron = isElectronApp();
let onlyJs = false;

main(args);

function main(args) {
	if(args.length == 0) {
		console.log("please name the component");
		return;
	}

	for(let i = 0; i < args.length; i++) {
		if(args[i] === "-j"){
			onlyJs = true;
		}
		else if(args[i].length > 2 && matchesConstraint(args[i])){
			componentname = args[i];
		}
	}

	if(componentname === ""){
		console.log("please enter a valid name for the component");
		return;
	}

	createAllFiles();
}

async function isElectronApp() {
	let package = await fs.getProjectRoot();
	return fs.isElectronApp(package + "/package.json");
}

function createAllFiles() {
	fs.createDirectory(componentname);
	fs.createFile(`${componentname}/${componentname}.component.js`, data.jsFile);
	fs.createFile(`${componentname}/${componentname}.component.css`, data.exampleCss);

	if(electron) {
		fs.createFile(`${componentname}/${componentname}.component.html`, data.exampleHtmlElectron);
	}
	else {
		fs.createFile(`${componentname}/${componentname}.component.html`, data.exampleHtml);
	}

	//registerComponent(componentname);
}

async function registerComponent(classname) {
	let mainjs = await fs.getProjectRoot() + "/src/main.js";
	console.log(mainjs);
	//let filepath = fs.findFile(`${classname}.component.js`, fs.getProjectRoot());

	//console.log("mainjs: " + mainjs);
	//console.log("filepath: " + filepath);
	//fs.appendFile(mainjs, `import ${classname} from "${filepath}";`);
}

function matchesConstraint(name) {
	return name.match(/\D*(-\D+)*/).length > 0;
}