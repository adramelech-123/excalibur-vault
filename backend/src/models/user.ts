import { InferSchemaType, Schema, model } from "mongoose";

// Create User Schema
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, select: false},
    password: {type: String, required: true, select: false}
})

// Create a type for the User by inferring the type from the schema
type User = InferSchemaType<typeof userSchema>

export default model<User>("User", userSchema)