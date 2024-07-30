// Group Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        members: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        inviteLink: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Group", groupSchema);
