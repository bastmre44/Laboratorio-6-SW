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