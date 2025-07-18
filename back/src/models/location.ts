import mongoose, { Schema, Document } from "mongoose";

interface ILocation extends Document {
    longitude: number;
    latitude: number;
}

const LocationSchema: Schema = new Schema({
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
});

export default mongoose.model<ILocation>("Location", LocationSchema);