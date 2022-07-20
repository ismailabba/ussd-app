const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();
const PORT = 8000

//mongodb connection
const database_url = 'mongodb://localhost:27017/ussd-adashe';
mongoose.connect(database_url);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database is running')
})


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('Success Message')
})

app.post('/', (req, res) => {
    const {phoneNumber, text, sessionID} = req.body;
    let response;

    if(text === ''){
        response = 'CON '
    }



    setTimeout(() => {
        res.send(response);
        res.end()
    }, 2000);
})


app.listen(PORT, () => {
    console.log('app is running on port ' + PORT)
})


