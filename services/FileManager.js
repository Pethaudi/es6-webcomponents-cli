const fs = require("fs");
const path = require("path");

class FileManager {
    static createFile(name, content = "") {
        fs.appendFile(name, content, function (err) {
            if (err) {
                throw err;
            }

            console.log("created " + name);

        });
    }

    static createDirectory(name) {
        if (!fs.existsSync(name)) {
            fs.mkdirSync(name);
        }
    }

    static getParentFolderName(currentfolder) {
        return path.dirname(filename).split(path.sep).pop();
    }

    static findFile(filename, counter = 5) {

		console.log("\n");
        console.log(filename + " " + counter);
        if (counter < 0) {
            console.log("counter is to low");
            return "";
		}

        if (!fs.existsSync(filename)) {
            console.log("Result of the boolean: " + fs.existsSync(filename));
            counter--;
            return FileManager.findFile("../" + filename, counter);
        }
        else {
            return filename;
		}
	}

static fromDir(filter, startPath = "./") {

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    console.log(files);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        console.log(filename);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            FileManager.fromDir(filename, filter); //recurse
        }
        else if (filename.indexOf(filter) >= 0) {
            console.log('-- found: ', filename);
        };
    };
}
}

module.exports = FileManager;