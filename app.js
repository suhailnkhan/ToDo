const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items = [];
var workitems = [];


app.get('/', function(req, res) {
    let day = date.getDate();
    res.render('list', { Listtitle: day, newitemlist: items });
});


app.post('/', function(req, res) {
    let item = req.body.add;
    if (req.body.list == 'Work') {
        workitems.push(item);
        res.redirect('/work')
    } else {
        items.push(item);
        res.redirect('/');
    }
});


app.get('/work', function(req, res) {
    res.render('list', { Listtitle: "Work List", newitemlist: workitems })
})


// app.post('/', function(req, res) {
//     let item = req.body.add;
//     workitems.push(item);
//     res.redirect('/work')
// });


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});