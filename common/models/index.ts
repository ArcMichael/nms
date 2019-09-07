// database model

import mongoose, { Model, model, Schema, Document } from 'mongoose';
import { IOrderDocument } from "./interface/Order";
import { OrderSchema } from "./schema/Order"
export const OrderModel: Model<IOrderDocument> = model('order', OrderSchema);

import { IAuthDocument, IAuthTokenDocument } from "./interface/Auth"
import { AuthSchema, AuthTokenSchema } from "./schema/Auth"
export const AuthModel: Model<IAuthDocument> = model('auth', AuthSchema);
export const AuthTokenModel: Model<IAuthTokenDocument> = model('auth_token', AuthTokenSchema);
