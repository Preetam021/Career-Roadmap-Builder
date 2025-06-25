import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type:String,
        },
    },{timestamps:true}
)

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;