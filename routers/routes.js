import express from "express";
import path from "path";

const router = express.Router();
const __dirname = import.meta.dirname;

// GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("*", (req, res) => {
  res.send("Error 404: Página no encontrada, por favor revise la ruta ingresada.");
});
export default router;