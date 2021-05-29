import {GrupoBotones} from "./GrupoBotones.js";

/**
 * Funcion que crea una modal en el DOM
 * @param {json} json - necesito ver esto
 */
export async function Modal(json){
    let modal = document.getElementById("modal-principal");
    ConfiguraModal(json);
    let myModal = await new bootstrap.Modal(modal);
    myModal.toggle();
}

function ConfiguraModal(AJson){
    const { titulo, contenido, claseModal, botones } = AJson;
    document.getElementById("modal-principalEtiqueta").innerText = titulo;
    document.getElementById("modal-cuerpo_principal").innerHTML = contenido.outerHTML;
    document.getElementById("modal-dialog_principal").className = `modal-dialog ${ (claseModal) && claseModal }`;
    if(botones != undefined){
        document.getElementById("modal-pie_principal").appendChild(CreaBotones(botones));
    }
}

function ConfiguraCuerpoModal (contenido) {
    const $cuerpoModal = document.getElementById("modal-cuerpo_principal");

    $cuerpoModal.innerHTML = contenido.outerHTML
}

function CreaBotones(Abotones){
    while(document.getElementById("modal-pie_principal").firstChild){
        document.getElementById("modal-pie_principal").removeChild(document.getElementById("modal-pie_principal").firstChild);
    }

    return GrupoBotones(Abotones);
}