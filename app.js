const { Todos } = require("./todos");
const { Todo } = require("./todo");

const tasks = new Todos();
tasks.add(new Todo("Go to shopping", new Date("2019-05-07"), false, "Buy groceries for next week"));
tasks.add(new Todo("Go to movie", new Date("2019-07-12"), false, "Attend movie premiere"));
tasks.add(new Todo("Buy fitness membership ", new Date("2020-03-02"), false, "Current membership will expire on this date"));
tasks.print();
tasks.finalize(2);
tasks.print();
tasks.modify(1, "Go to cinema", null, undefined);
tasks.print();
tasks["delete"](7);
tasks.print();
tasks.printNotFinished();
