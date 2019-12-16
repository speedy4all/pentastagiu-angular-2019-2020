export class TODO {
    nume:string;
    data:Date;
    stare:string;
    descriere:string;
    constructor(nume:string,data:Date,stare:string,descriere:string) {
        this.nume=nume;
        this.data=data;
        this.stare=stare;
        this.descriere=descriere;
    }

    finalizare(stare:string='finalizat') {
        if(this.stare!='finalizat')
            this.stare=stare
        else
            console.log('task-ul selectat este deja finalizat');
    }

    modificare(modificare:any,nume_element_modificat:string) {

        switch(nume_element_modificat) {
            case 'nume':
                this.nume=modificare;
                break;
            case 'data':
                this.data=modificare;
                break;
            case 'descriere':
                this.descriere=modificare;
                break;
            default:
                console.log('nu exista elemenul pe care doriti sa il modificati');
                break;
        }
    }
}

 
