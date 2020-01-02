import { Actions } from './actions';
import { Action } from './action';

function runActionsList(): void{
    const firstAction = new Action('Go to work', new Date('12.21.2019'), true);
    const secondAction = new Action('Go shopping', new Date('12.21.2019'), false);
    const thirdAction = new Action('Play with your child', new Date('12.21.2019'), false);
    const fourthAction = new Action('Watch a movie', new Date('12.21.2019'), false);

    const list = new Actions();
    list.addToDo(firstAction);
    list.addToDo(secondAction);
    list.addToDo(thirdAction);
    list.addToDo(fourthAction);
    list.listAll();
    list.finishTask(thirdAction);
    list.modifyToDo(fourthAction, 'name','Eat dinner');
    list.modifyToDo(thirdAction, 'date', new Date('12.22.2019'));
    list.listNotFinished();
    list.removeToDo(fourthAction);
    list.listAll();
}
export { runActionsList };