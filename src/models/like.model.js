import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  video: {
    type: Schema.Types.ObejctId,
    ref: "Video",
  },
  comment: {
    type: Schema.Types.ObejctId,
    ref: "Comment",
  },
  tweet: {
    type: Schema.Types.ObjectId,
    ref: "Tweet",
  },
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Like = mongoose.model("Like", likeSchema);
