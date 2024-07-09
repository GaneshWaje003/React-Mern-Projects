const mongoose = require('mongoose');
const { Schema } = mongoose;

const cssSchema = new Schema ({
    name: { type: String },
    code: { type: String },
    lang: { type: String }
});

const getMongooseModel = (lang) =>{
    return mongoose.model(lang,cssSchema);
}

const addData = async (name , code , lang )  => {
    
    const newModel = getMongooseModel(lang);
    
    try {
        const bordercss = new newModel({
            name: name,
            code: code,
            lang: lang,
        })

        const savedHack = await bordercss.save();
        console.log('Document saved:', savedHack);

    } catch (error) {
        console.log(`error : ${error}`)
    }

}

const readData = async (lang) =>{

    const newModel = getMongooseModel(lang);

    try {
        
        const data = await newModel.find({});
        console.log("data founded ",data);
        return data;
    } catch (error) {
        console.log("Error of mongodb \n",error);
    }

}

module.exports={addData,readData};