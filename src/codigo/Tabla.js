import {Boton} from "./Boton.js";

/**
 * Funcion que crea una tabla en el DOM
 * @param {json} AJson - Parametro json
 * @returns DOMElement
 */
export function Tabla(AJson){
    const {  idTabla, contenido, tipo, opciones } = AJson;
    const $tabla = document.createElement("table");
    const $cabecera = document.createElement("thead");
    const $trCabecera = document.createElement("tr");
    const $tbody = document.createElement("tbody");


    const titulos = Object.keys(contenido[0]);
    //const tamanioTabla = (tipo === 1)? titulos.length-1 : titulos.length;

    $tabla.id = (idTabla) && idTabla;
    $tabla.className = "table table-bordered";

    titulos.forEach( titulo => {
        const $th = document.createElement("th");
        $th.innerText = (tipo === 1 && titulo === titulos[titulos.length-1])? 'Opciones': titulo;
        $trCabecera.appendChild($th);
    });
    $cabecera.appendChild($trCabecera);
    $tabla.appendChild($cabecera);

    let contadorEmpresas = 0;
    contenido.forEach( registro => {
        const $tr = document.createElement("tr");
        for(let i = 0; i <= titulos.length-1 ; i++){
            const $td = document.createElement("td");
            const contenidoTd = (tipo === 1 && i === titulos.length-1)
                ? opciones[contadorEmpresas]
                : document.createTextNode(registro[titulos[i]]);

            $td.appendChild(contenidoTd);
            $tr.appendChild($td);
        }
        $tbody.appendChild($tr);
        contadorEmpresas++;
    });

    $tabla.appendChild($tbody);

    return $tabla;
}