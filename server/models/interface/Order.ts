import mongoose, { Model, model, Schema, Document } from 'mongoose';

export interface IOrderDocument extends Document {
    user: string;
    type: string;
    status: number;
    currencyCode: string;
    paymentTypes: string;
    price: string;
    unit: string;
    quantity: number;
    minAmount: number;
    maxAmount: number;
    description: string;
    createTime?: string;
    updateTime?: string;
}