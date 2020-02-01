import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { HomeModule } from './home/home.module';

@Injectable({
  providedIn: HomeModule
})
export class MessageService {

  private message = new Subject<string>();

  constructor() { }

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }

  setMessage(value: string) {
    this.message.next(value);
  }
}
