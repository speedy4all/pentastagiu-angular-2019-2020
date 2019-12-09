 interface IDeclarations {
   nume: string;
   descriere: string;
   data: Object;
   stareFinalizare: boolean;
 }     

class Lista implements IDeclarations {
 
  constructor(public nume:string, public descriere: string,public data : Object,public stareFinalizare:boolean){
   this.nume =  nume;
   this.descriere = descriere;
   this.data   =  data;
   this.stareFinalizare =  false;
  }
  finish(): boolean {
      if(!this.stareFinalizare){
          return this.stareFinalizare = true;
      }
  }
  modificareTask(nume: string, descriere: string, data: Object): void{
      this.nume =nume;
      this.descriere = descriere;
      this.data =  data;
  }
}

class CreareLista {
    public static tasks: Lista[]= new Array;
    addTask(nume: string, descriere: string, data: Object): void{
        let taskNou = new Lista(nume, descriere, data, false);
        CreareLista.tasks.push(taskNou);
    }
    stergereTask(index:number) : void{
        CreareLista.tasks.splice(index,1);
    } 
    actualizareLista(index:number, nume: string, descriere: string, data: Object) : void {
       CreareLista.tasks[index].modificareTask(nume, descriere, data);
    }
    finalizareTask(index:number) : void{
        CreareLista.tasks[index].finish();

    }
    listUnfinished() {
       return console.table(CreareLista.tasks.filter(item=>!item.stareFinalizare));
    }
    
    listAll(){
        return console.table(CreareLista.tasks);
    }
}

const todo = new CreareLista;

todo.addTask('Dosar masina', 'Depunere acte' , new Date ('2020-01-05'));
todo.addTask('Programare doctor', 'Control anual' , new Date ('2020-01-08'));
todo.addTask('Asigurare masina', 'Plata rata CASCO' , new Date ('2020-01-12'));
todo.addTask('Programare masina', 'Revizie anuala' , new Date ('2020-02-05'));
todo.stergereTask(2);
todo.finalizareTask(1);
todo.actualizareLista(0 ,'Dosar masina', 'Depunere dosar de inmatriculare ', new Date('2020-01-05'));
todo.listAll();
todo.listUnfinished();




  
