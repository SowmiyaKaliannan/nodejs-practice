
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("File content:", data);
    }
    console.log("File read operation completed.");
});
