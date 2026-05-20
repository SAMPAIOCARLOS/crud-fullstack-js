import { listarTarefas } from "../modules/services/requests.js";


import { createNewTask } from "../modules/globaisFunctions/functionsCrud.js";
import { loadComponent } from "./LoadComponents.js";
import { startPage } from "../modules/globaisFunctions/functionsSystem.js";
import { BASE_URL } from "./universalPath.js";

document.addEventListener("DOMContentLoaded", () => {


    loadComponent("#Modal_error", "src/components/modalError.html", () => {

    });

    loadComponent("#nav", "src/components/navBar.html", () => {

    });

    loadComponent("#header", "src/components/header.html", () => {
        createNewTask();
        // listarTarefas();
        startPage(listarTarefas, `${BASE_URL}/tasks/list`);

    });


});


