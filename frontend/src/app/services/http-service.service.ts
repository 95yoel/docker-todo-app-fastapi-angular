import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from 'src/interfaces/tasks';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private taskUrl = environment.tasksUrl;
  
  constructor(private http:HttpClient) { }

  //LIST TASK
  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.taskUrl);
  }

  

}
