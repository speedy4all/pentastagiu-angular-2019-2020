var Task = /** @class */ (function () {
    function Task(name, date, finished, description) {
        this.name = name;
        this.date = date;
        this.finished = finished;
        this.description = description;
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }
    return Task;
}());

exports.Task = Task;
