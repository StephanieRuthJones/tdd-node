const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/users.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        //Within the body of the GET handler, we're calling the Node fs library we passed in to call the readFile() method. 
        //This helps us to access the underlying file system and load up a file
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

};

module.exports = userRoutes;
