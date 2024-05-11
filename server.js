import app from "./src/app.js";

const PORT = 8000;

app.get("/", (req, res) => {
    res.status(200).send("Bem-Vindo ao ApiPlanet!");
});

app.listen(PORT, () => {
    console.log(`Servidor escutando em http:localhost:${PORT}`);
});