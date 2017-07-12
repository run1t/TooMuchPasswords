import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Password Schema
 */
const PasswordSchema = new mongoose.Schema({
    login: { type: String, required: [true, "can't be blank"] },
    password: { type: String, required: [true, "can't be blank"] },
    url: { type: String, required: [true, "can't be blank"] },
    userId: {type: mongoose.Schema.Types.ObjectId, required: true}
});



/**
 * @typedef Password
 */
export default mongoose.model('Password', PasswordSchema);
