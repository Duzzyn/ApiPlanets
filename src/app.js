import express from "express";
import db from "./db/database.js";

db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
    console.log("conexão com o banco feita com sucesso")
});

const app = express();
console.log(app.use(express.json()))

export default app;