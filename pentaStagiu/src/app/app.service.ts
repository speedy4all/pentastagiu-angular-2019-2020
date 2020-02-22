import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {
    public messageStream: Observable<string>;
    // tslint:disable-next-line: variable-name
    private _message: Subject<string> = new Subject<string>();

    constructor() {
        this.messageStream = this._message.asObservable();
    }

    set message(value: string) {
        this._message.next(value);
    }

    set error(value: string) {
        this._message.error(value);
    }

    public complete() {
        this._message.complete();
    }
}
