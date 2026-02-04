# 🧪 Challenge 1 – Testing de APIs con Postman

## 📌 Descripción General

Este challenge consistió en la **validación funcional de una API REST** utilizando **Postman**, aplicando distintos métodos HTTP (**GET y POST**) para la gestión de usuarios.

El objetivo fue diseñar y ejecutar pruebas sobre los endpoints principales del sistema, incorporando **variables de entorno**, **manejo de tokens**, y **scripts de validación**, siguiendo criterios de aceptación previamente definidos y documentados.

---

## 🎯 Objetivo / Historia de Usuario

**Como** consumidor de la API  
**Quiero** consultar, registrar y autenticar usuarios  
**Para** garantizar que los servicios de la API funcionen correctamente y cumplan con los criterios definidos.

---

## 🔗 Endpoints Probados

Se crearon y ejecutaron tres requests principales:

| Método | Endpoint | Descripción |
|------|--------|------------|
| GET | `/users` | Consulta de usuarios registrados |
| POST | `/register` | Registro de nuevos usuarios |
| POST | `/login` | Autenticación de usuarios |

Cada request fue validado de forma independiente y como parte de un flujo completo.

---

## 🌍 Configuración de Entorno

Se utilizó la funcionalidad de **Postman Environments** para desacoplar la configuración del entorno, incluyendo:

- `base_url`
- `endpoint_register`
- `endpoint_login`
- Variables dinámicas
- Almacenamiento de token de autenticación

Esto permitió reutilizar los requests y facilitar la ejecución en distintos entornos.

---

## 🔐 Configuración de Autenticación (Bearer Token)

La autenticación de los endpoints protegidos se configuró utilizando el esquema Bearer Token disponible en Postman.

El token de acceso se obtuvo 

Authorization: Bearer <token>

--

## 🧠 Estrategia de Pruebas

### 🔹 Tipos de Pruebas
- Pruebas funcionales
- Validación de contratos (estructura JSON)
- Validación de respuestas HTTP

### 🔹 Casos de Prueba
- Registro exitoso de usuario
- Login exitoso con credenciales válidas
- Login fallido con credenciales inválidas
- Consulta de usuarios con token válido

### 🔹 Precondiciones
- API disponible y accesible
- Variables de entorno configuradas
- Datos de prueba definidos

---

## ✅ Criterios de Aceptación

- Validación de **status codes** (200, 400, 401).
- Verificación de mensajes de respuesta.
- Validación de la estructura del JSON.
- Confirmación de generación y uso correcto del token.
- Manejo adecuado de respuestas inválidas.

Los criterios de aceptación se encuentran documentados en el archivo `.md` del challenge.

---

## 🧩 Scripts y Validaciones

Se implementaron **scripts en la sección de Pre-request, Post- request y Tests de Postman**, utilizando JavaScript para:

- Parsear respuestas JSON de forma segura.
- Validar status codes.
- Verificar la existencia de campos obligatorios.
- Manejar respuestas vacías o inválidas.
- Guardar valores dinámicos en variables de entorno.

---

## ▶️ Ejecución

1. Importar la colección en Postman.
2. Importar el environment configurado.
3. Seleccionar el entorno correspondiente.
4. Ejecutar los requests de forma individual o secuencial.

---

## 📊 Resultados y Evidencias

- Ejecución exitosa de los endpoints según los criterios definidos.
- Evidencias almacenadas en la carpeta `evidencias/`.
- Logs y validaciones visibles en la consola de Postman.

---

## 🛠️ Herramientas Utilizadas

- **Postman**
- **JavaScript (Scripts de Postman)**
- **Variables de Entorno**
- **API REST**

---

📌 *Este challenge forma parte del proceso de formación QA Pro Level, enfocado en testing de APIs, diseño de casos de prueba y validaciones automatizadas en Postman.*
