import express from "express";
import path from "path";
import router from "./src/routers/routes.js";

const app = express();
const __dirname = import.meta.dirname;
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "/src")));

//routes
app.use("/", router);

app.listen( port, console.log(`Example app listening on port http://localhost:${port}`));
