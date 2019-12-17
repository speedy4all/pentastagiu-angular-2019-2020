/**
 * Start of program execution
 */
const { Todo } = require("./todo");
const { Todos } = require("./todos");

function main() {
  const tasks = new Todos();

  tasks.add(
    new Todo("Go to shopping", new Date("2019-12-05"), "milk, beer...")
  );
  tasks.add(
    new Todo(
      "Go to movie",
      new Date("2019-12-12"),
      "Not decided what movie to watch"
    )
  );
  tasks.add(
    new Todo(
      "Dentist appointment",
      new Date("2019-12-20"),
      "Be there 15 minutes earlier"
    )
  );
  tasks.add(
    new Todo(
      "Pick up friend from airport",
      new Date("2019-12-23"),
      "Ask about the exact time the plane will land"
    )
  );

  tasks.listAll();

  tasks.finishTask(1);

  tasks.listAll();

  tasks.finishTask(2);

  tasks.modifyName(0, "Go to the grocery store");

  tasks.listAll();

  tasks.modifyDescription(3, "Landing at 17:00");

  tasks.listNotFinished();

  tasks.listAll();

  /**
   * End of program execution
   */
}

exports.main = main;
