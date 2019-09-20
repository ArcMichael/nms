import mongoose, { Model, model, Schema, Document } from 'mongoose';
import jwtOptions from "../../../config/JWT";
const { tokenExpiresTime } = jwtOptions;

export const AuthSchema: Schema = new Schema({
    // user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    username: { type: String, required: true },
    passwordMD5: { type: String, required: true },
    description: String,
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
})

export const AuthTokenSchema: Schema = new Schema({
    username: { type: String, required: true },
    token: { type: String, required: true },
    expires: { type : Date, default : Date.now, index : { expires : 120 } },
    description: String,
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
})