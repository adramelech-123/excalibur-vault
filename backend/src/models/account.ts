import { InferSchemaType, Schema, model } from "mongoose";

const accountSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  acc_title: { type: String, required: true },
  acc_email: { type: String },
  acc_username: { type: String },
  acc_password: { type: String },
  acc_url: { type: String },
  acc_image: { type: String },
  acc_notes: { type: String },
}, {timestamps: true});

type Account = InferSchemaType<typeof accountSchema>

export default model<Account>("Account", accountSchema)