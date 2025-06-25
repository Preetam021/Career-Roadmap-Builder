import Goal from "../models/goalModel.js";

const getGoals = async(req, res)=>{
    try {
        const goals = await Goal.find({user: req.user._id}).sort({createdAt: -1});
        res.json(goals);
    } catch (error) {
        res.status(500).json({message:"Failed to fetch goals"});
    }
}

const createGoal = async(req, res)=>{
    const {title, description} =req.body;

    if(!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    try {
        const newGoal = await Goal.create({
            user: req.user._id,
            title,
            description
        });
        res.status(201).json(newGoal)
    } catch (error) {
        res.status(500).json({message: "Failed to create goal"})
    }
}

export {getGoals, createGoal};