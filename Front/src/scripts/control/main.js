import { listarTarefas } from "../modules/services/requests.js";


import { styleInputError } from "../modules/globaisFunctions/functionsSystem.js";
import { loadComponent } from "./LoadComponents.js";
import { startPage } from "../modules/globaisFunctions/functionsSystem.js";
import { BASE_URL } from "./universalPath.js";

document.addEventListener("DOMContentLoaded", () => {



    loadComponent("#nav", "src/components/navBar.html", () => {

    });

    loadComponent("#header", "src/components/header.html", () => {
        styleInputError();
        // listarTarefas();
        startPage(listarTarefas, `${BASE_URL}/tasks/list`);

    });


});


