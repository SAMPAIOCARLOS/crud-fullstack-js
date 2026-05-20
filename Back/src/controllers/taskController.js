const connection = require("../config/db");

function listTasks(req, res) {
    connection.query("SELECT * FROM tasks", (err, results) => {
        // err = se deu erro
        // results = o que veio do banco

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
}

function toggleTask(req, res) {
    connection.query("SELECT done FROM tasks WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: "Tarefa não encontrada" });

        const newDone = results[0].done === 1 ? 0 : 1;

        connection.query("UPDATE tasks SET done = ? WHERE id = ?", [newDone, req.params.id], (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Tarefa atualizada!", done: newDone });
        });
    });
}

function createTask(req, res) {
    connection.query("INSERT INTO tasks (title) VALUES (?)", [req.body.title], (err, results) => {

        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(500).json({ error: "Erro ao criar tarefa" });
        if (!req.body.title) return res.status(400).json({ error: "Título é obrigatório" });

        res.json({ message: "Tarefa criada!", id: results.insertId });
    });
}

function updateTask(req, res) {

}

function deleteTask(req, res) {

}

module.exports = {
    listTasks,
    toggleTask,
    createTask,
    updateTask,
    deleteTask
}