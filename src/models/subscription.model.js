import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //user who is Subscribinng
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //user to whome subscriber is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscriprion", subscriptionSchema);
