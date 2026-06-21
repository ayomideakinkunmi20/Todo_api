const TodoModel = require("../model/todoModel");

//CRUD
//GETTING ONE TODO
const getAllTodos = async(req , res)=>{
    try{
        const todos = await TodoModel.find();
        return res.status(200).json(todos)

    }catch(error){
        return res.status(500)
        .json({ error:error.message})
    }
};

//GETTING ONETODO
const getOneTodo = async(req , res) =>{
    try{
        const{id} = req.params
        const todo = await TodoModel.findById(id);
        return res.status(200).json({message:"Todo found", data: todo});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
};

//CREATING NEWTODO
const createTodo = async(req , res)=>{
    try{
        const{title , details} = req.body;
        const todo = await TodoModel.create({ title,details });
        return res.status(200).json({message:"todo created successfully", data: todo});
    }catch(error){
        return res.status(500).json({message:"Error cresting todo", error:error.message});
    }
};

//UPDATING TODO
const updateTodo = async(req , res)=>{
    try{
        const {id} = req.params
     
        const todo = await TodoModel.findByIdAndUpdate(
            id,
            {completed:true},
            {new:true},
        );
        return res.status(200).json({message:"todo updated successfully", data: todo})
    }catch(error){
        return res.status(500).json({messsage:"Error updating todo", error:error.message})
    }
};

//DELETING TODO
const deleteTodo = async(req , res)=>{
    try{
        const{id} = req.params
        const todo = await TodoModel.findByIdAndDelete(id);
        return res.status(200).json({message:"Todo deleted sucessfully", data: todo})
    }catch(error){
        return res.status(500).json({message:"error deleting todo", error:error.message})
    }
};


module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};