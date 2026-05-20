export async function listarTarefas(endpoint) {
     try {
         const res = await fetch(endpoint);
         const data = await res.json();

         if (!res.ok) {
             throw new Error(`Erro ao listar tarefas antes do catch : ${res.status} ${res.statusText}`);
         }

        //  console.log("Tarefas listadas:", data);
         return data;
     } catch (error) {
         console.error("Erro ao listar tarefas:", error);
         throw error;
     }

}


export async function ActiveTask(endpoint, taskId, done) {
    try {
        const response = await fetch(endpoint, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: taskId, done: done })
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar tarefa: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Erro ao atualizar tarefa:", error);
        throw error;
    }
}


export async function CreateTask(endpoint, title) {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        });

        if (!response.ok) {
            throw new Error(`Erro ao criar tarefa: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
        throw error;
    }
}



