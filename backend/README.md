# Backend

Curso normal del sistema con middlewares:

1. Realizar una consulta a traves de una ruta definida en el la carpeta routes
2. El middleware recibe la consulta y se encarga de la lógica de negocio y mandar a los controladores por la información que necesita de la base de datos
3. El controlador realiza las consultas a la base de datos y devuelve la información al middleware
4. El middleware procesa la información y devuelve la respuesta al cliente
