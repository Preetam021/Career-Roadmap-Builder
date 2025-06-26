import mongoose from "mongoose";
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

const deleteGoal = async (req, res)=>{
    try {
        
        const goal = await Goal.findById(req.params.id);
        if(!goal) return res.status(404).json({message: "Goal not found"});
        
        if(goal.user.toString() !== req.user._id.toString()){
            return res.status(401).json({message: "Not authorized"});
        }


        await goal.deleteOne();
        res.json({message: "Goal deleted"});

    } catch (error) {
        res.status(500).json({message: "Delete failed"});
    }
}
const toggleGoalCompletion = async(req, res)=>{
    try {
        const goal = await Goal.findById(req.params.id);
        if(!goal) return res.status(404).json({message: "Goal not found"});

        if(goal.user.toString() !== req.user._id.toString()){
            return res.status(401).json({message: "Not authorized"});
        }

        goal.completed = !goal.completed;
        await goal.save();
        res.json(goal);

    } catch (error) {
        res.status(500).json({message: "Update failed"});
    }
}


export {getGoals, createGoal, deleteGoal, toggleGoalCompletion};