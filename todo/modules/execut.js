const {TodoItem} = require('./TodoItem.js');
const {TodoCollection} = require('./TodoCollection.js');
function execut() {
    var todos = [
        new TodoItem("Write review", new Date("2019-12-05"), "to eMag"),
        new TodoItem("Shopping", new Date("2019-12-05"), "Potatos and Onion"),
    ];
    var collection = new TodoCollection("Rudolf", todos);
    console.clear();
    console.log(collection.userName + "'s Todo List");
    collection.displayTodo();
    collection.addTodo("Run a bike", "");
    collection.addTodo("Bake pizza in microwave", "with salami");
    collection.addTodo("Watch new movie", "Star Wars");
    collection.displayTodo();
    collection.finishTodo(2);
    collection.displayTodo();
    collection.modifyTodo(3, "description", "and peperoni");
    collection.deleteTodo(1);
    collection.displayTodo();
    collection.noFinish();

};
exports.execut = execut;
