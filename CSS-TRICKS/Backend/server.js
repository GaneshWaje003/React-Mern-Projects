const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const app = express();
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/cssHacks');
const cssSchema = ({
    name: { type: String },
    code: { type: String },
    lang: { type: String }
});

const addData = async (name , code , lang )  => {
    const cssModel = mongoose.model(lang, cssSchema);

    try {
        const bordercss = new cssModel({
            name: name,
            code: code,
            lang: lang,
        });

        const savedHack = await bordercss.save();
        console.log('Document saved:', savedHack);

    } catch (error) {
        console.log(`error : ${error}`)
    }

}

app.get('/', (req, res) => {
    res.send("Server is on");
});

app.get('/toAndroidHacks', (req, res) => {
    res.send("Server is on");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})