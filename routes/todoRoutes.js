const express = require('express');
const router = express.Router();
const{
    getAllTodos,getOneTodo,createTodo,updateTodo,deleteTodo,
} = require("../controller/todoControler");

router.get("/get-todos", getAllTodos);
router.get("/:id", getOneTodo);
router.post("/create-todo", createTodo);
router.patch("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;