const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 7000;

const path = require('path');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.render('index');
});

app.listen(port);
console.log(`Server ready at port ${port}`);