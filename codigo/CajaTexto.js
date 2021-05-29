/**
 * Funcion que crea una caja de texto en el DOM, recibe una serie de parametros en formato json.
 * @param {json} AJson - Grupo de parametros en formato json que recibe la funcion CajaTexto.
 * @returns DOMElement
 * @example
 * CajaTexto({
 *      name: "ejemplo",
 *      required: true,
 *      minlength: 10,
 *      maxlength: 10,
 *      placeHolder: "example"
 * });
 */
export function CajaTexto(AJson){
  const { name, required, minlength, maxlength, placeHolder } = AJson;

  const $cajaTexto = document.createElement("input");
  $cajaTexto.type = "text";
  $cajaTexto.id = `id-${name}`;
  $cajaTexto.name = name;
  if(required)$cajaTexto.required = required;
  if(minlength != undefined)$cajaTexto.minLength = minlength;
  if(maxlength != undefined)$cajaTexto.maxLength = maxlength;
  $cajaTexto.placeholder = placeHolder;
  return $cajaTexto;

}