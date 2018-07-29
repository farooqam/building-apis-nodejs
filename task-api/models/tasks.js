module.exports = function(app) {
    
    var tasks = [
        {title: "By some shoes", dueDate: new Date(2018, 7, 30)},
        {title: "Fix notebook", dueDate: new Date(2018, 8, 10)},
        {title: "Pickup birthday cake", dueDate: new Date(2018, 8, 12)},                                                
    ];

    this.getTasks = function() {
        return tasks;
    }

    return this;

}