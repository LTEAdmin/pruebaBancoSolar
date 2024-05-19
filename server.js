import express from "express";
const app = express();
import router from "./routers/routes.js";
const port = process.env.PORT || 3000;

app.use("/", router);

app.listen( port, console.log(`Example app listening on port http://localhost:${port}`));
