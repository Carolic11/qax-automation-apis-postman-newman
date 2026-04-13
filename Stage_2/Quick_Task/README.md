# Quick Tasks – Creación y Login de Usuarios vía API

> **Nota:** El endpoint de creación de productos no se encontraba disponible en el contexto de este ejercicio.
> Como alternativa válida, se implementó el flujo de **registro y login de usuarios**, cubriendo los mismos conceptos de automatización con datos externos (archivo CSV).

---

## Objetivo / Historia de usuario

Como tester, quiero automatizar la creación y autenticación de usuarios mediante la API de práctica `expandtesting`, cargando un archivo CSV con los datos de prueba, para validar que el flujo de registro y login funciona correctamente de forma iterada y reproducible.

---

## Criterios de aceptación

- El endpoint `POST /users/register` debe retornar un estado de respuesta exitoso para cada registro del archivo CSV.
- Las variables `email_login` y `password_login` deben quedar almacenadas como *collection variables* tras cada iteración.
- El endpoint `POST /users/login` debe autenticarse exitosamente usando las variables capturadas en el paso anterior.
- El flujo debe ejecutarse correctamente tanto desde **Postman Collection Runner** como desde **Newman** en consola.

---

## 🗂️ Estrategia de prueba

### Casos de prueba

| # | Caso | Tipo |
|---|------|------|
| 1 | Registro exitoso de usuario con datos válidos del CSV | Positivo |
| 2 | Login exitoso usando credenciales registradas en la iteración anterior | Positivo |

### Datos de prueba

- **Fuente:** archivo CSV con los campos `email` y `password`.
- Los datos se leen iteración por iteración mediante `pm.iterationData.get()`.

### Precondiciones

- Tener acceso a `https://practice.expandtesting.com/notes/api/`
- El archivo CSV debe estar disponible y correctamente formateado antes de la ejecución.
- La variable de entorno `{{base_url}}` debe estar configurada con el valor:
  ```
  https://practice.expandtesting.com/notes/api/
  ```

---

## ⚙️ Ejecución

### Endpoints utilizados

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `{{base_url}}users/register` | Registro de usuario |
| `POST` | `{{base_url}}users/login` | Login con credenciales registradas |

### Body – Login (`raw / JSON`)

```json
{
  "email": "{{email_login}}",
  "password": "{{password_login}}"
}
```

### Script Post-response – Registro

```javascript
console.info("Inicio creacion de usuario")

pm.test("Validar estado respuesta", function() {
    pm.collectionVariables.set("email_login", pm.iterationData.get("email"))
    pm.collectionVariables.set("password_login", pm.iterationData.get("password"))
})
```

### Desde Postman – Collection Runner

1. Abrir la colección y seleccionar **Run collection**.
2. Cargar el archivo CSV en el campo **Data file**.
3. Configurar el número de iteraciones según la cantidad de registros en el CSV.
4. Ejecutar.

### Desde Newman (línea de comandos)

```bash
newman run <nombre-coleccion>.json \
  -d <archivo-datos>.csv \
  --reporters cli
```

---

## 📊 Resultados

- Todas las iteraciones del CSV fueron procesadas **exitosamente**.
- Los usuarios fueron creados y autenticados sin errores.
- Las variables `email_login` y `password_login` se propagaron correctamente entre requests dentro de cada iteración.
