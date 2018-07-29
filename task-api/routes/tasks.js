module.exports = function(app) {

    app.get(
        "/tasks",
        (req, res) => res.json(app.models.tasks.getTasks()));

    return this;
}