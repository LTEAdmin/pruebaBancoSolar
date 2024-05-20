import express from "express";
import path from "path";
import {
    addUserQuery,
    getUserQuery,
    deleteUserQuery,
    updateUserQuery,
} from "../database/userQuery.js";
import { 
    addTransQuery,
    getTransQuery,
} from "../database/transQuery.js";


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

// - /transferencia POST: Recibe los datos de una nueva transferencia y los almacena en PostgreSQL. 
router.post("/tranferencia", async (req, res) => {
    try {
        const { emisor, receptor, monto } = req.body;
        const datos = [emisor, receptor, monto];
        console.log(datos);
        const response = await addTransQuery(datos);
        res.status(200).json(response.rows);
    }
    catch {
        res.status(500).send({ error: "Error al ingresar el nuevo usuario" });
    }
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

//transferencias GET: Devuelve todas las transferencias almacenadas en la base de datos en formato de arreglo 
router.get ("/transferencia", async (req, res) => {

    try {
        const { nombre, balance } = req.body;
        const datos = [nombre, balance];

        const response = await getTransQuery(); 
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

// - /usuario DELETE: Recibe el id de un usuario registrado y lo elimina . 
router.delete("/usuario", async (req, res) => {
    try {
        const { id } = req.query;
        const response = await deleteUserQuery(id);
        res.status(200).send(response);
    }
    catch { 
        res.status(500).send({ error: "Error al eliminar el usuario" });
    }
});

// - /usuario PUT: Recibe el id de un usuario registrado y actualiza sus datos.
router.put("/usuario", (req, res) => {
    try {
        const {id} = req.query;
        const {nombre, balance} = req.body;
        const response =  updateUserQuery(Number(id), nombre, Number(balance));
        res.status(200).send(response.rows);
  }
    catch { 
        res.status(500).send({ error: "Error al actualizar el usuario" });
      
  }
});




/* 
 

 


*/





router.get("*", (req, res) => {
  res.send("Error 404: Página no encontrada, por favor revise la ruta ingresada.");
});
export default router;