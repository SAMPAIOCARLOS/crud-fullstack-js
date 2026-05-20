import { ActiveTask } from "../services/requests.js";
import { CreateTask } from "../services/requests.js";
import { BASE_URL } from "../../control/universalPath.js";
import { listarTarefas } from "../services/requests.js";




export async function startPage(funcListarTarefas, end) {
    try {
        const data = await funcListarTarefas(end);

        if (!data || !Array.isArray(data)) {
            throw new Error("Dados inválidos recebidos do servidor.");
            showErrorModal("Erro ao carregar as tarefas. Por favor, tente novamente mais tarde.");
        }

        createItemList(data);
        console.log("Data from listarTarefas:", data);

        
    } catch (error) {
        console.error("Erro ao listar tarefas:", error);
        showErrorModal("Erro ao carregar as tarefas. Por favor, tente novamente mais tarde.");
    }
}


export function showErrorModal(message) {
    const modal = document.querySelector("#container_modal_error");
    const modalMessage = document.querySelector("#error_message");
    const closeButton = document.querySelector("#btn_close_modal");

    if (!modal || !modalMessage || !closeButton) {
        console.error("Elementos do modal não encontrados.");
        return;
    }

    modalMessage.textContent = message;
    modal.classList.remove("hidden");

    closeButton.onclick = () => {
        modal.classList.add("hidden");
    };

    modal.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    };
}





export function styleInput(input, classStyle) {
    input.classList.add(classStyle);
}
export function removeStyleInput(input, classStyle) {
    input.classList.remove(classStyle);
}



export function createItemList(tasks) {
    const taskList = document.querySelector("#tasks_list");

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const item = document.createElement("div");
        item.classList.add("task_item");

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("task_check");
        if (task.done) checkBtn.classList.add("checked");

        checkBtn.addEventListener("click", async () => {
            try {
                const data = await ActiveTask(`${BASE_URL}/tasks/toggle/${task.id}`);


                task.done = !task.done;
                checkBtn.classList.toggle("checked");
                taskText.classList.toggle("done");
            } catch (error) {
                console.error("Erro ao atualizar tarefa:", error);
                showErrorModal("Erro ao finalizar tarefa. Por favor, tente novamente mais tarde.");
            }
        });

        const taskText = document.createElement("span");
        taskText.classList.add("task_text");
        if (task.done) taskText.classList.add("done");
        taskText.textContent = task.title;

        const actions = document.createElement("div");
        actions.classList.add("task_actions");

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn_edit");
        editBtn.textContent = "✏️";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn_delete");
        deleteBtn.textContent = "🗑️";

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        item.appendChild(checkBtn);
        item.appendChild(taskText);
        item.appendChild(actions);

        taskList.appendChild(item);
    });
}



