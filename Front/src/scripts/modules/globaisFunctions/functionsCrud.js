import { CreateTask } from "../services/requests.js";
import { BASE_URL } from "../../control/universalPath.js";
import { showErrorModal } from "./functionsSystem.js";
import { startPage } from "./functionsSystem.js";
import { listarTarefas } from "../services/requests.js";

import { styleInput, removeStyleInput } from "./functionsSystem.js";

export function createNewTask() {
    const input = document.querySelector("#task_input");
    const btn_add = document.querySelector("#btn_add");
    const error_text = document.querySelector("#error_text");

    btn_add.addEventListener("click", async () => {

        if (input.value.trim() === "") {
            styleInput(input, "error");
            error_text.style.opacity = "1";
            return;
        }

        console.log(input.value);

        try {
            const data = await CreateTask(`${BASE_URL}/tasks/add`, input.value.trim());
            console.log("Tarefa criada:", data);
            await startPage(listarTarefas, BASE_URL + "/tasks/list");

        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
            showErrorModal("Erro ao criar tarefa. Por favor, tente novamente mais tarde.");
        }

        input.value = "";
    });


    input.addEventListener("input", () => {
        removeStyleInput(input, "error");
        error_text.style.opacity = "0";
    });


}

function editItem() {

}

function deleteItem() {

}








