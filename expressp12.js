const express = require('express');
const app = express();
const PORT = 3000;
 
const user = express.Router();
 
user.get('/login', function (req, res) {
    console.log(req.baseUrl);
    res.end();
})
 
app.use('/user', user);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
