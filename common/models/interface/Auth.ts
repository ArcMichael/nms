import mongoose, { Model, model, Schema, Document } from 'mongoose';

export interface IAuthDocument extends Document {
    username: string;
    passwordMD5: string;
    // user: string;
    description: string;
    createTime?: string;
    updateTime?: string;
}

export interface IAuthTokenDocument extends Document{
    username: string;
    token: string;
    expires: Date;
    description: string;
    createTime?: string;
    updateTime?: string;
}