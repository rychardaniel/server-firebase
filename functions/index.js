const functions = require("firebase-functions");
const express = require("express");

const app = express();

// Rota simples
app.get("/", (req, res) => {
    res.send("Olá, mundo! Este é um servidor Node.js com Express no Firebase.");
});

// Exporta a função para o Firebase
exports.app = functions.https.onRequest(app);