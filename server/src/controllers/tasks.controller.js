import Task from "../models/tasks.models.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find({user: req.user.id}).populate("user");
    res.json(tasks);
}

export const createTasks = async (req, res) => {
    const { title, description, date } = req.body;
    console.log(req.user);
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
};


export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
};

export const deleteTasks = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" })
    res.json({ message: "Task deleted successfully" })
}

export const updateTasks = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!task) return res.status(404).json({message: "Task not found"})
        res.json(task)
}
