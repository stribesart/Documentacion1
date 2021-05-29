/**
 * Esta funcion Boton crea un Boton en el DOM, recibe una serie de parametros en formato json.
 * @param {json} AJson - Grupo de parametros en formato json que recibe la funcion Boton.
 * @returns DOMElement
 * @example
 * Boton({
      textoBoton: 'Ejemplo',
      claseBoton : 'btn-secondary',
      idBoton: 'ejemplo',
      funcionClick : (e)=>{
        console.log(e.target);
      }
    });
 */
export function Boton(AJson){
  const { textoBoton, claseBoton, idBoton, funcionClick } = AJson;
  const $boton = document.createElement("button");

  $boton.innerHTML = textoBoton;
  $boton.className = `btn ${claseBoton}`;
  $boton.id = idBoton;

  live("click", idBoton, funcionClick);

  // $boton.addEventListener("click", funcionClick);
  return $boton;
}