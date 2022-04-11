# TACS
El uso de myself a las urls hace referencia a APIs a ser consumidas por usuarios que fueron autenticados, la decisión tomada por el equipo fue la de guardar el Id del usuario como parte de su JWT de sesión el cual se usará en la APIs que posean ese identificador como parte de sus URLs.

### Correr en docker:
```
$ mvn clean install -Dmaven.test.skip=true (compilamos el .war)
$ docker build --tag wordle . (generamos la imagen)
$ docker run -d --name wordle wordle (generamos el contenedor y lo corremos)
```
swagger: http://172.17.0.2:8080/api/swagger-ui/index.html#/

### Correr en docker-compose
```
$ docker-compose up -d
```
swagger: http://localhost:8080/api/swagger-ui/index.html#/
