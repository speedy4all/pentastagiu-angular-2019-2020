"use strict";
exports.__esModule = true;
var TODO = /** @class */ (function () {
    function TODO(nume, data, stare, descriere) {
        this.nume = nume;
        this.data = data;
        this.stare = stare;
        this.descriere = descriere;
    }
    TODO.prototype.finalizare = function (stare) {
        if (stare === void 0) { stare = 'finalizat'; }
        if (this.stare != 'finalizat')
            this.stare = stare;
        else
            console.log('task-ul selectat este deja finalizat');
    };
    TODO.prototype.modificare = function (modificare, nume_element_modificat) {
        switch (nume_element_modificat) {
            case 'nume':
                this.nume = modificare;
                break;
            case 'data':
                this.data = modificare;
                break;
            case 'descriere':
                this.descriere = modificare;
                break;
            default:
                console.log('nu exista elemenul pe care doriti sa il modificati');
                break;
        }
    };
    return TODO;
}());
exports.TODO = TODO;
