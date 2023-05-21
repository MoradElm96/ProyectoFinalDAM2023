Borrador del proyecto de fin de grado de Dam aplicacion web de ejercicios y entrenamiento


Actualizacion 19/05/2023

  -  Se ha tocado el css para poner una paleta de colores adecuada para que se vea bien, posiblemente los colores definitivos.
  -  Se ha tocado el footer para ajustarlo a la pantalla y que no se suba cuando el componente no ocupe toda la pantalla.
  -  Se ha creado una pantalla principal de bienvenida antes de logearnos, que permite iniciar sesion o registrarse, con una imagen de fondo y una pequeña presentacion.
  -  Se ha creado un componente que genera un avatar con las iniciales del email y lo pone como icono de cuenta.
  -  Se han añadido imagenes para carrusel principal despues de logearnos.
  -  Se han estilizado las pantallas login, registro y recuperar contraseña.
  -  Se ha añadido en la funcion gestion perfil para que el admin pueda poner roles a otros usuarios , solo el puede cambiar el rol de los demas usuarios, para permitir tener mas admin o menos admin.
  -  Se ha implementado un manifiesto.json para poder hacer que la web se pueda descargar como PWA, se han editado los iconos previamente con gimp.
  -  Se ha añadido al footer un componente sitemap para que el  usuario tenga a la vista de forma general los distintos sitios que puede visitar dentro de la web.
  -  Se revisado y comentado todo el codigo tanto la parte servidora como el cliente
  -  Se esta preparando el entorno para subirlo a produccion y  poder ver fallas y bugs, todavia en proceso, por ver las variables de entorno y rutas publicas y privadas tanto del servidor como del front.
  
  -  Actualmente se esta aprendiendo y buscando informacion sobre amazon web services aws para poder llevar a cabo el despliegue de la aplicacion.

Actualizacion 08/05/2023 

-  Se ha añadido el navbar y footer a todos los componentes para que se vean siempre que el usuario haya iniciado sesion.
-  En el footer se han añadido una descripcion del proyecto y una descripcion sobre mi y tambien iconos con enlaces a distintas webs, linkedin git, playstore etc y  un boton de donaciones de paypal funcional.
-  Se ha añadido en favoritos un boton para exportar los ejercicios a PDF y poder descargarlos.
-  Se ha añadido un componente para calcular las calorias gastadas diarias segun tus habitos de actividad semanal y teniendo tambien en cuenta  el peso y la altura
-  Se han recopilado mas datos para una tabla rutinas segun el objetivo de usuario, bajar peso, ganar masa muscular, mnatenimiento y se le muestra en forma de tabla.
-  Se ha modificado la variables de entorno  .env y los endpoints del servidor para por si cambio de ruta de servidor, solo modificar en un lugar 



Actualizacion 02/05/2023 - Se han retocado bastantes cosas pero de manera provisional:

  - Se modificaron las tablas de la base de datos para trabajar mejor con el backend, se quitaron tablas y columnas clave valor para tener menos tablas, se corrigio el   cotejamiento utf8, se actualizo el script de python que lee el csv y inserta en la tabla los ejercicios. Se crearon los csv con mas datos recopilados(todavia nose si añadir mas), tengo que correjir la ortografia de algunos campos de ese csv.

  - Se buscaron vectores de imaganes libres de derechos en la web:  https://www.freepik.com y se añadieron a la carpeta publica del proyecto y a su respectivo campo en el csv, con su descripcion.
  - Se añadio un componente card list que muestra los ejercicios de la base de datos, se aplicaron algunos estilos provisionales y se manjeron las imaganes.

  - Se añadio controladores nuevos para la tabla ejercicios para poder filtrar en el backend por diferentes categorias.
  - Se añadio en el front algunos campos para hacer ese filtrado.
  - Se añadio paginacion de manera provisional, ya que mas adelante movere ese card list del menu principal 
  - Se añadio funcionalidad a los cards para añadir el ejercicio a favoritos, para ello se tuvo que guardar el id del usuario en localstorage para usarlo mas adelante en la select de mostrar los favoritos solo los suyos...
  
  - Se añadio interfaz grafica al componente favoritos para poder ver los ejercicios favoritos en una tabla con filas horizontales y distintos campos,tambien un chekbox y un boton para seleccionar los ejercicios y irlos borrando de sus favoritos.



Actualizacion 23/04/2023 - Subidos avances y mejoras con el login, y resolucion de errores:
  - Se añadió opcion de olvidar contraseña y recuperarla a traves de enlace al email, usando el servidor de smtp de gmail que ofrece 2000 mails gratuitos al dia, con ayuda del paquete de node nodemailer.
  - Se añadió SweetAlert2 para ventanas de errores y exitos.
  - Se agrego seguridad al envio del mail añadiendo un jasonwebtoken que envia como parametro en la ruta y con el enrutamiento se controla el acceso, es decir solo puede cambiar la contraseña quien tenga ese enlace
  - Se enruto el login y el reset password con react router dom, para controlar quien tiene    acceso a esas rutas
  ---por ahora el login estaria completo--- en proximos avances me centrare en la funcion prinicipal de la web.


Actualizacion 19/04/2023 - Subidos todo el avance que tengo hasta la fecha:

    - Se diseño la base de datos y se metieron algunos datos de prueba
    - Pantallas login y registro funcionales y pantalla principal sin maquetar
    - Backend funcional modelo controlador CRUD para la tabla usuarios entre ellos login y registro
    - Se diseño la base de datos y se metieron algunos datos de prueba



  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
