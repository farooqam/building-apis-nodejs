import express from "express";

const PORT = 3000;
const app = express();

app.get(
    "/", 
    (req, res) => res.json(
        {
            api: "Task API",
            status: "green",
            date: Date.now()
        })
);

app.listen(
    PORT, 
    () => console.log(
        `Task API listening on port ${PORT}.`)
);