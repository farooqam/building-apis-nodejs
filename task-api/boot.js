import express from "express";
import consign from "consign";

const app = express();

consign()
    .include("models")
    .then("config.js")
    .then("routes")
    .into(app);

var port = app.config.port;

app.listen(
    port, 
    () => console.log(
        `Task API listening on port ${port}.`)
);