const fs = require("fs");
const path = require("path");
const pkg = require("pkg-dir");
const find = require("find");

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
	
	static appendFile(file, text) {
		fs.appendFile(file, text);
	}

    static getParentFolderName(currentfolder) {
		return path.dirname(currentfolder).split(path.sep).pop()
    }

    static findFile(filename, counter = 10) {
        if (counter < 0) {
            return "";
		}

        if (!fs.existsSync(filename)) {
            counter--;
            return FileManager.findFile("../" + filename, counter);
        }
        else {
            return filename;
		}
	}

	static findFile(filename, startdir) {
		return find.fileSync(filename, startdir);
	}

	static findDir(dirname, counter = 10) {
		if (counter < 0) {
            return "";
		}

        if (!fs.existsSync(filename)) {
            counter--;
            return FileManager.findFile("../" + filename, counter);
        }
        else {
            return filename;
		}
	}

	static isElectronApp(filename) {
		if(this.readFile(filename).indexOf("electron") >= 0);
			return true;
		return false;
	}

	static readFile(filename) {
		return fs.readFileSync(filename);
	}

	static async getProjectRoot() {
		return await pkg(process.cwd());
	}
}

module.exports = FileManager;