Una vez creada nuestra estructura donde ira nuestro proyecto tenemos que definir el nombre del proyecto, para esto se debe consultar con el cliente o con el encargado del proyecto.

Sustituya el nombre de la carpter **nombreProyecto** por el nombre del proyecto.

Ahora antes de cualquier cosa debemos que comenzar con nuestra estructura *HTML* para nuestro sistema, debemos definir con el equipo una estructura para la pagina en general para saber como se va a trabajar la pagina web.

Para la creacion de dicho documento lo que podemos hacer es crear la estructura basica, como utilizaremos Visual Studio Code solo podemos poner el simbolo **!** y presionamos la tecla **tab** o **tabulador** y tendremos una estructura como la siguiente:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Posteriormente hay que identificar bien la **cabecera** y el **cuerpo** los cuales se llaman **head** y **body** respectivamente. Dentro de la cabecera debemos insertar el [link]() del cdn de bootstrap (framework que utilizamos para estilos), debemos insertar el [link]() del FontAwesomey posteriormente nuestros estilos propios que se encontraran en la carpeta CSS [ver estilos](https://stribesart.github.io/Documentacion/tutorial-estilos.html). Ahora en nuestro body debemos insertar un div "principal", este div servira para construir dentro de el nuestra pagina, ademas debemos insertar el [script]() de Bootstrap, el [script]() del Alertify, el [script]() de Axios y tendremos una seccion para nuestros scripts personalizados. Nuestro **index.html** quedaria de la siguiente manera:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <!-- Estilos Personalizados -->
    <link rel="stylesheet" href="publico/css/estilos.css">

    <title>Nombre del Proyecto</title>

</head>
<body>

    <div class="principal" id="principal"></div>

    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    <!-- Alertify -->
    <script src="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>

    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    
    <!-- Scripts Personalizados -->
    <script type="module" src="publico/js/script.js"></script>

</body>
</html>
```

Como sabemos cada pagina debe de manejar una pagina exclusiva de login, esto es con el fin de que nuestros filtros funcionen con la informacion que provee cada usuario, por lo tanto crearemos un archivo html en la raiz de nuestra carpeta **nombreProyecto** llamado **login**, en este archivo vamos a definir nuestra estructura de login normal empezando con el logo o titulo de nuestra empresa o proyecto para saber a donde vamos a ingresar, una caja de texto para un nombre de usuario, correo o numero de empleado, una caja de texto para su contraseña, botones de ingresar, iniciar o entrar y sus botones de recuperar contraseña y si se requiere algun tipo de footer donde se ingresaria informacion extra. Como ya sabemos *cada archivo HTML va a llevar su respectivo archivo js* entonces crearemos un archivo javascript llamado login. En el archivo login.js crearemos la logica de nuestro login.

![ImagenLogin](https://github.com/stribesart/Documentacion/blob/main/imagenes/OrganizacionArchivos/loginhtml.jpeg?raw=true)

Dentro del documento index sabemos que hay que poner el Titulo del sitio web o el logotipo, incluso ambas en algunas excepciones pero tambien depende de como se ha definido la estructura con el equipo, tambien sabemos que necesitamos una barra de navegacion, la estructura general que se debe seguir es cargar toda la informacion en la pagina principal, ademas nuestra pagina contendra un menu de lista que nos diga que usuario esta logueado y que opciones tendra ademas de la de cerrar sesion.  Posteriormente en nuestro cuerpo de la pagina debemos divirlo en 3 partes: la parte de los filtros o cabecera del cuerpo de pagina, el cuerpo de pagina que es donde iran toda la informacion que queremos mostrar al usuario, por ultimo un footer o pie de pagina si es que lo requiere el usuario, toda estructura hay que definirla en el archivo **index.html**. Y como ya lo hemos visto tambien crearemos un archivo index.js que es el que le insertara la logica a nuestro proyecto.

![Imagen que nos define la agrupacion de contenido](https://github.com/stribesart/Documentacion/blob/main/imagenes/OrganizacionArchivos/indexHTML.jpeg?raw=true)

**[Siguiente.](https://stribesart.github.io/Documentacion/tutorial-paso2.html)**