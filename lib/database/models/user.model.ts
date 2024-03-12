import { Schema, model, models } from "mongoose";

// Import necessary modules

// Define the User interface
export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: string;
  creditBalance: number;
}

// Define the User schema
const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: String, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

// Create and export the User model
const User = models?.User || model("User", UserSchema);
export default User;
