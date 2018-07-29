function getHealth() {
    var health = {
        api: "Task API",
        status: "green",
        date: Date.now()
    };

    return health;
}

module.exports = function(app) {
    app.get(
        "/",
        (req, res) => res.json(getHealth()));


    app.get(
        "/health", 
        (req, res) => res.json(getHealth()));

    return this;
}
