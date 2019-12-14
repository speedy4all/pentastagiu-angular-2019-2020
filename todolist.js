const { Todos } = require("./todos");
const { Todo } = require("./todo");
const { printList } = require("./utils");

const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date(),"Buy apples"));
tasks.add(new Todo("Go to movie", new Date(),"starts at 10PM"));
tasks.add(new Todo("Work meeting", new Date(),"2nd Buidling room 402"));
tasks.add(new Todo("Mom's birthday", new Date(),"Buy her flowers"));
tasks.add(new Todo("Fix your car", new Date(),"Take it to a service Auto"));
tasks.add(new Todo("Dentist appointment", new Date("2019-12-20"),"EastSide Street no.15"));
tasks.add(new Todo("Get a haircut", new Date("2019-12-20"),""));

console.log("All tasks");
tasks.listAll();

tasks.finishTask(2);
console.log("After finishing a task");
tasks.listAll();

console.log("After removing a task");
tasks.removeByIndex(4);
tasks.listAll();

console.log("Unfinished tasks for today");
tasks.listNotFinished();
