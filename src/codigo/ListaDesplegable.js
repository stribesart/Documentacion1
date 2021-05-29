/**
 * Funcion que crea una lista en el DOM, recibe sus parametros en formato json.
 * @param {json} AJson - Grupo de parametros en formato json que recibe la funcion ListaDesplegable.
 * @returns DOMElement
 * @example
 * ListaDesplegable({
 *      id: "ejemplo",
 *      contenido: "ejemplo de contenido"
 * });
 */
export function ListaDesplegable(AJson){
  const { id, contenido } = AJson;
  const listaDesplegable = document.createElement("select");

  listaDesplegable.className = "form-select form-select-sm";
  listaDesplegable.setAttribute("aria-label", ".form-select-sm")

  return listaDesplegable;
}q