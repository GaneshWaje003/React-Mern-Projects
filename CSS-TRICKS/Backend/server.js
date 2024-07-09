const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const cors  = require('cors');
const {addData, readData} = require('./DatabaseMethods');

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/cssHacks').then(()=>{
    console.log("Mongodb connected");
});


app.get('/', (req, res) => {
    res.send("Server is on");
});

app.get('/toAndroidHacks', (req, res) => {
    res.send("Server is on");
    addData('flutter toast ','anew code is written to the file','flutter');
});

app.get('/readData/:lang', async (req, res) => {
    const { lang } = req.params;

    try {        
        const data = await readData(lang);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"error occure ",error:error.message});
    }
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})