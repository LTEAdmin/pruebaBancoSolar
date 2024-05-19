import express from "express";
import path from "path";
import { addUserQuery, getUserQuery } from "../database/userQuery.js";

const router = express.Router();
const __dirname = import.meta.dirname;

// GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba. 
router.get("/", (req, res) => {
    try {
         res.sendFile(path.join(__dirname, "../views/index.html"));
     }
    catch (error) {
         console.log("Error: " + error);
    }; 
});

// - /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL. 
router.post("/usuario", async (req, res) => {
    try {
        const { nombre, balance } = req.body;
        const datos = [nombre, balance];

        const response = await addUserQuery(datos);
        res.status(200).json(response.rows);
    }
    catch {
        res.status(500).send({ error: "Error al ingresar el nuevo usuario" });
    }
});

// - /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
router.get("/usuarios", async (req, res) => {
    try {
        const response = await getUserQuery();
        res.status(200).json(response);
    }
    catch { 
        res.status(500).send({ error: "Error al obtener los usuarios" });
    }
});

// - /usuario PUT: Recibe el id de un usuario registrado y actualiza sus datos.
router.put("/usuario", (req, res) => {
  try {
  }
  catch { 
      
  }
});

// - /usuario DELETE: Recibe el id de un usuario registrado y lo elimina . 
router.delete("/usuario", (req, res) => {
    try {
    }
    catch { 

    }
});


/* 
 

//transferencia POST: Recibe los datos para realizar una nueva transferencia. Se 
debe ocupar una transacción SQL en la consulta a la base de datos. 
//transferencias GET: Devuelve todas las transferencias almacenadas en la base de 
datos en formato de arreglo 

*/





router.get("*", (req, res) => {
  res.send("Error 404: Página no encontrada, por favor revise la ruta ingresada.");
});
export default router;