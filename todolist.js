const { Todos } = require("./todos");
const { Todo } = require("./todo");
const { printList } = require("./utils");

Todos.prototype.listAll = () => {
    console.log(`new list in place`);
}

const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date("2019-12-05")));
tasks.add(new Todo("Go to movie", new Date("2019-12-12")));
tasks.add(new Todo("Dentist appointment", new Date("2019-12-20")));

tasks.listAll();

const persons = [
  { name: "Bogdan", age: 24 },
  { name: "Sidona", age: 20 }
];

printList(persons);
