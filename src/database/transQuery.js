import dbase from "../config/db.js";

export const addTransQuery = async (datos) => {
  try {
    const sql = {
      text: "INSERT INTO transferencias (emisor, receptor, monto) VALUES ($1, $2, $3) RETURNING *",
      values: datos,
    };
    const response = await dbase.query(sql);
    console.log(response.rows[0]);
    return response.rows[0];
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const getTransQuery = async () => {
  try {
    const sql = {
      text: "SELECT * FROM transferencias",
    };
    const response = await dbase.query(sql);
    return response.rows;
  } catch (error) {
    console.log("Error: " + error);
  }
};

