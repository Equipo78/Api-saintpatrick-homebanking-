#Api Saint Patrick  Homebanking

Esta api se construye con Node.js-express y mysql


#### Clonar repo
Para utlizar esta Api, es necesario clonar el repositorio una vez clonado abrira su terminal de comandos, es requisito que tenga Node instalado.

######1. Descargar dependecias
Debera ingresar a la carpeta de la Api donde este ubicada en su ordenador en su terminal de comandos y escribira el siguiente comando:

`npm i` o `npm install` esto descargara las dependencias para que la api funciones.

######2. Base de datos
Una vez que este descargado todas las dependencias tendra que correr los scripts para la creacion de la base de datos.
`src/database` se encontraran dos archivos .sql : "Estructura de tablas y datos "
Primero correra "Estructura de tablas.sql" y luego "Datos.sql".

###### 3. Variables de entorno
En `src/database/config` tendra un JSON donde tendra configuracion de la conexion a la base de datos, ahi tendra que configurar el usuario y password que utiliza para el uso de base de datos en su ordenador.

######4. Levantar Api
Una vez finalizado los anteriores paso podra levantar la api.
Escriba en su terminal `npm start ` ya con este levantara la api si todo esta en orden.

variables de entorno

local
 - PORT=8000
 - USER=yalxqgttlpqozl
 - PASSWORD=bcb6cb1c7f60a8d16de56e87b61ddeec6e501bb8086fe9ddea7d6f66162755a0
 - HOST=ec2-34-194-158-176.compute-1.amazonaws.com
 - NAME=d7dktjbr1avls6
 PORT=''
heroku

 - heroku config:add DIRECCION='dirreccion_real_mailer'


