import {TODOS} from './TODOS'
import {TODO} from './TODO'

function run():void {

let task1=new TODO('Angular Remote1',new Date('December 1, 1995 03:24:00'),'nefinalizat','descriere Angular Remote1');
let task2=new TODO('Angular Remote2',new Date('December 2, 1995 03:24:00'),'nefinalizat','descriere Angular Remote2');
let task3=new TODO('Angular Remote3',new Date('December 3, 1995 03:24:00'),'nefinalizat','descriere Angular Remote3');
let task4=new TODO('Angular Remote4',new Date('December 4, 1995 03:24:00'),'nefinalizat','descriere Angular Remote4');
let task5=new TODO('Angular Remote5',new Date('December 5, 1995 03:24:00'),'nefinalizat','descriere Angular Remote5');

let ListOftasks=new TODOS();

ListOftasks.adaugareTask(task1);
ListOftasks.adaugareTask(task2);
ListOftasks.adaugareTask(task3);
ListOftasks.adaugareTask(task4);
ListOftasks.adaugareTask(task5);

ListOftasks.listareTasks();

ListOftasks.finalizareTasks(task1);

ListOftasks.listareTasks();

ListOftasks.stergereTask(task5);

ListOftasks.listareTasks();

ListOftasks.modificareTask(task3,new Date('December 2, 1995 03:24:00'),'data');

ListOftasks.listareTasks();

ListOftasks.listare_unfinished_Tasks();

}

export {run};