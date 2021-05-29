import {Boton} from "./Boton.js";

/**
 * Funcion que agrupa varios botones que se crean usando la funcion Boton.
 * @param {json} AJson - Grupo de parametros en formato json que recibe la funcion GrupoBotones.
 * @returns DOMElement
 * @example
 * GrupoBotones(Abotones);
 */
export function GrupoBotones(AJson){
    const { botones } = AJson;
    const $grupoBotones = document.createElement("div");

    botones.forEach( boton => {
       $grupoBotones.appendChild(Boton(boton));
    });

    return $grupoBotones;
}