import dbase from "../config/db.js";

export const addUserQuery = async (datos) => { 
    try { 
        const sql = {
          text: "INSERT INTO users (nombre, balance) VALUES ($1, $2) RETURNING *",
          values: datos,
        };
        const response = await dbase.query(sql);
        return response.rows[0];
    }
    catch (error) { 
        console.log("Error: " + error);
    }
}