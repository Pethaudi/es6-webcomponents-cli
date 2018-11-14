const fs = require("fs");

class FileManager {
    static createFile(name, content = "") {
        fs.appendFile(name, content, function(err) {
            if(err)
                throw err;

            console.log("saved!")
        });
    }
}

module.exports = FileManager;