const fs = require("fs");
const path = require("path");

class FileManager {
    static createFile(name, content = "") {
        fs.appendFile(name, content, function(err) {
            if(err){
                throw err;
            }

            console.log("created " + name);
            
        });
    }

    static createDirectory(name) {
        if(!fs.existsSync(name)){
            fs.mkdirSync(name);
        }
    }

    static getParentFolderName(currentfolder) {
        return path.dirname(filename).split(path.sep).pop();
    }
}

module.exports = FileManager;