const express = require("express");

const { listTasks, toggleTask, createTask, updateTask, deleteTask } = require("../controllers/taskController")

const router = express.Router()
router.get("/list", listTasks)
router.patch("/toggle/:id", toggleTask)
router.post("/add", createTask)
router.put("/edit", updateTask)
router.delete("/delete", deleteTask)


module.exports = router