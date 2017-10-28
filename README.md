#### Proyecto backend en Node.JS
# Servicios de gestión de clientes  y polizas

En este servidor encontraremos los servicios necesarios par consultar los clientes y sus polizas.

### Incio del server

Primero deberemos inicar el server en la consola des de la root del proyecto:

```
 > cd ../backend
 > npm start
```

Tendremos el servidor arrancado en el puertoo 5000.

Antes de inicar las consultas, deveremos realizar el login (User: admin, Pass: 1234) para tener acceso a los servicios

```
http://localhost:5000/login?user=admin&pass=1234
```

### Servicios

1. Usuarios filtrados por Id. Devuelve los el usuario con el id introducido y todas sus polizas.
```
http://localhost:5000/getUserById?id=a0ece5db-cd14-4f21-812f-966633e7be86
```

2. Usuarios filtrados por nombre. Devuelve aquellos usuarios con el nombre introducido.
```
http://localhost:5000/getUserById?name=Britney
```

3. Polizas con todos susu usuarios.
```
http://localhost:5000/getPoliciesLinkedUserName
```

4. Listado de usuarios con todas sus polizas.
```
http://localhost:5000/getUserLinkedPolicy
```

### Descripción del proyecto

Para la creación del proyecto, he utilizado las librerias express para hacer crear lo servicion GET de entrada a nuestro server y requestify para las consultas a los servicios externos.

#### Organizción del proyecto

##### index.js
Creación y encendido del server. Administra la carga de datos y las consultas externas a nuestros datos

##### /models
Client.js modelo de cliente
Policy.js modelo de polizas
AdminClientsPolicies.js estructurador de datos, devuelve las los datos requeridos para las funciones del serve, linca objetos y filtra por los valores necesarios

##### /services
getDataService.js Servicios de consultas a los servicios externos
