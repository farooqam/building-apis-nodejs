import express from "express";
import consign from "consign";

const app = express();

consign()
    .include("models")
    .then("config.js")
    .then("routes")
    .into(app);

var port = app.config.serverConfig.port;
var apiName = app.config.serverConfig.apiName;

app.listen(
    port, 
    () => console.log(
        `${apiName} listening on port ${port}.`)
);