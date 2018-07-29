import express from "express";

const PORT = 3000;
const app = express();

function getTasks() {
    var tasks = [
        {title: "By some shoes", dueDate: new Date(2018, 7, 30)},
        {title: "Fix notebook", dueDate: new Date(2018, 8, 10)},
        {title: "Pickup birthday cake", dueDate: new Date(2018, 8, 12)},                                                
    ];

    return tasks;
}

function getHealth() {
    var health = {
        api: "Task API",
        status: "green",
        date: Date.now()
    };

    return health;
}


app.get(
    "/",
    (req, res) => res.json(getHealth()));

app.get(
    "/health", 
    (req, res) => res.json(getHealth()));

app.get(
    "/tasks",
    (req, res) => res.json(getTasks()));

app.listen(
    PORT, 
    () => console.log(
        `Task API listening on port ${PORT}.`)
);