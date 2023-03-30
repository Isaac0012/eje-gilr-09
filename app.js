const express = require ("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hola Mundo de los servidores web");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor esta corriendo en Node.js con express escuchando en el puerto, port`);
});