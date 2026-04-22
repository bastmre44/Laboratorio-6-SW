# Laboratorio-5-SW

## Registro de Errores 


### Error 1: Estructura incompleta en createServer

El servidor no ejecutaba y mostraba el error:
"missing ) after argument list".

Se identificó que la función createServer no estaba correctamente cerrada.
Faltaban dos cierres: una llave } y un paréntesis ).

Se corrigió cerrando correctamente la función antes de server.listen.

### Error 2: Content-Type incorrecto en la ruta /info

Se identificó que el servidor respondía con el header:
Content-Type: application-json

Este valor no es válido según el estándar MIME.

Se corrigió a:
Content-Type: application/json

Con esto el cliente puede interpretar correctamente la respuesta.


## Error 3: Manejo incorrecto de JSON en /api/student

Se utilizaba JSON.stringify sobre el resultado de fs.readFile sin await,
lo que generaba una respuesta incorrecta.

Además, no se estaba procesando correctamente el contenido del archivo JSON.

Solución:
Se agregó await para obtener el contenido real del archivo y se utilizó JSON.parse
para convertirlo a objeto antes de enviarlo como JSON válido.


##  Error 4: Archivo datos.json inexistente

Al realizar la prueba de la ruta /api/student en Postman, el servidor se detenía y mostraba un error ENOENT.

Esto ocurría porque el código intentaba leer un archivo llamado datos.json que no existía en la ruta especificada.

Solución:
Se creó el archivo datos.json en el directorio correspondiente y se aseguró que la ruta utilizada en el código coincidiera con su ubicación.


## Error 5: Código HTTP incorrecto en rutas no encontradas

El servidor respondía con código 200 en rutas inexistentes,
lo cual no es correcto según el estándar HTTP.

Solución:
Se cambió el código de respuesta a 404 y se agregó la ruta solicitada en el mensaje.