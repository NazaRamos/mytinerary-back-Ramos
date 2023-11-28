import { Schema, Types, model } from "mongoose";

const collection = "cities"
const schema = new Schema ({
    name: {type: String, required: true},
    photo: {type: String, required: true},
    country: {type: String, required: true},
    continent: {type: String, required: true},
    description: {type: String, required: true}
}, {timestamps: true})

const Cities = model(collection, schema)

export default Cities