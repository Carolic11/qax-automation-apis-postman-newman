
Escenario:
Listar usuarios:

GET /api/users debe devolver HTTP 200.
La lista de usuarios no debe estar vacía y cada usuario debe contener id, first_name, last_name y email.

Given el  endpoint (GET /api/users) esta disponible 
When se envia la peticion a (GET /api/users)
then se obtiene la lista de usuario 
and codigo de respuesta 200

Escenario:
Registro de usuario:

POST /api/register con payload válido devuelve HTTP 200.
La respuesta debe incluir un id y un token.

Given el endpoint (POST /api/register) que se encuentra disponible
When se envia la peticion (POST /api/register) con el playload 
{
id=1,
first_name=andres,
last_name=lopez,
email=notengo@gmail.com
}
then La respuesta  incluye un id y un token
and responder con codigo de respuesta 200

Escenario 
Login de usuario:

POST /api/login con credenciales válidas devuelve HTTP 200.
La respuesta debe contener un token para autenticación.

Given el endpoint /api/login se encuentra disponible
When se envia /api/login con credenciales válidas
then la peticion devuelve respuesta HTTP 200
And respuesta  contiene un token para autenticación.










