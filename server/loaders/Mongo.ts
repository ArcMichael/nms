import mongoose, { Model, model, Schema, Document } from 'mongoose';
import serverOptions from "../../config/Servers";
const { port, mongooseConf } = serverOptions;

const { url, options } = mongooseConf;

// const options = mongooseConf.options

// const url = mongooseConf.url
// const data

class MongoController{
    db: any;
    constructor(){
        mongoose.connect(url, options);
        this.db = mongoose.connection;
    }
}

export { MongoController }