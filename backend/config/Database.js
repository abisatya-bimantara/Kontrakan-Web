import mysql from "mysql2/promise";

const Db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "kontrakan",
  password: "",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export const testConnection = async () => {
  try {
    await Db.getConnection();
    console.log("Koneksi ke database berhasil!!!");
  } catch (error) {
    console.log("koneksi gagal", error);
  }
};

export const query = async (query, value) => {
  try {
    const [results] = await Db.query(query, value ?? []);
    return results || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};