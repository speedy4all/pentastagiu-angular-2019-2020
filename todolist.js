const {Todos} = require('./todos');
const {Todo} = require('./todo');
const {printList} = require('./todos');



const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date("2019-12-05")));
tasks.add(new Todo("Go to movie", new Date("2019-12-12")));
tasks.add(new Todo("Dentist appointment", new Date("2019-12-20")));


tasks.listAll();


const persons = [{name: 'daniela', age: 27}, {name: 'bogdan', age: 28}];

printList(persons);
