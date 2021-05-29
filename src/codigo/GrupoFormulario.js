/**
 * Funcion que crea un formulario y agrupa elementos del DOM que recibe como paramentros.
 * @param {json} AJson - Grupo de parametros en formato json que recibe la funcion GrupoFormulario.
 * @returns DOMElement
 */
export function GrupoFormulario(AJson){
  const { textoEtiqueta, idInput, contenido  } = AJson
  const $grupoFormulario = document.createElement("div");
  const $etiqueta = document.createElement("label");
  const $parrafo = document.createElement("p");

  $etiqueta.innerText = textoEtiqueta;
  $etiqueta.setAttribute("for", idInput);

  $parrafo.className = "error-formulario";
  $parrafo.id = `error-${idInput}`;

  $grupoFormulario.className = "form-group";

  $grupoFormulario.appendChild($etiqueta);
  contenido.forEach( elemento => {
     $grupoFormulario.appendChild(elemento);
  });
  $grupoFormulario.appendChild($parrafo);


  return $grupoFormulario
}