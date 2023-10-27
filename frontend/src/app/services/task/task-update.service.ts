import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskUpdateService {

  constructor() { }

  // CREATE A SUBJET TO MANAGE EVENTS
  private taskUpdated = new Subject<void>();

  // CREATE AN OBSERVABLE TO ALLOW COMPONENTS SUBSCRIBE
  taskUpdated$ = this.taskUpdated.asObservable();

  //UPDATE TASKS EMITING EVENT WITHC SUBJECT
  updateTasks() {
    this.taskUpdated.next();
  }



}
