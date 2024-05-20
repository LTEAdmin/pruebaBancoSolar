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

export const getUserQuery = async () => {
    try {
        const sql = {
            text: "SELECT * FROM usuarios",
        };
        const response = await dbase.query(sql);
        return response.rows;
    }
    catch (error) {
        console.log("Error: " + error);
    }
};

export const deleteUserQuery = async (datos) => {
    try {
        const sql = {
          text: "DELETE FROM usuarios WHERE id = $1 RETURNING *",
          values: [datos],
        };
        const response = await dbase.query(sql);
        if (response.rowCount === 0) {  //se verifica si se elimino el usuario
            throw new Error("No se pudo eliminar el usuario");
        }
        else { 
            response.rows[0];
        };
        return response.rows[0];
    }
    catch (error) {
        console.log("Error: " + error);
    };
}; 

export const updateUserQuery = async ( nombre, balance, id) => {
  try {
    const sql = {
        text: `UPDATE usuarios SET nombre=$1, balance = $2  WHERE id = $3 RETURNING *`,
        values:[nombre, balance, id],
      };
    console.log (values)
    const response = await dbase.query(sql);
    if (response.rowCount === 0) {
      //se verifica si se modifico el usuario
      throw new Error("No se pudo modificar el usuario");
    }
    else {
      response.rows[0];
    };
    return response.rows[0];
  }
    catch (error) {
        console.log("Error: " + error);
    };
}; 

// funcion para realizar prueba de ingreso de usuario
//addUserQuery(["pedro", 2000]);
//getUserQuery();
