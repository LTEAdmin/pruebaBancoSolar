import dbase from "../config/db.js";

export const addUserQuery = async (datos) => { 
    try { 
        const sql = {
          text: "INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *",
          values: datos,
        };
        const response = await dbase.query(sql);
        console.log (response.rows[0]);
        return response.rows[0];
    }
    catch (error) { 
        console.log("Error: " + error);
    }
}
// funcion para realizar prueba de ingreso de usuario
//addUserQuery(["pedro", 2000]);
