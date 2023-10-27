import { Component } from '@angular/core';
import { Tasks } from 'src/interfaces/tasks';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { TaskUpdateService } from 'src/app/services/task/task-update.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent {

  tasks: Tasks[] = [];
  private taskUpdateSubscription: Subscription = new Subscription;

  constructor(private httpService:HttpServiceService,
    private taskService:TaskUpdateService,
    private http:HttpClient){}

  

    ngOnInit() {

      //UPDATE LIST OF TASK
      this.taskUpdateSubscription = this.taskService.taskUpdated$.subscribe(() => {
        this.loadTasks();
      });
      
      //LOAD TASKS
      this.loadTasks();
    }
    
    //LOAD TASKS
    loadTasks() {
      this.httpService.getTasks().subscribe((data) => {
        this.tasks = data;
      });
    }
    
    //UNSUBSCRIBE ON DESTROY
    ngOnDestroy() {
      this.taskUpdateSubscription.unsubscribe();
    }

    //UPDATE STATUS
    changeStatus(id:number){
      this.updateTask(id);
    }  


    //DELETE TASK
    deleteTask(id:number){
      this.http.delete(`${environment.deleteUrl}/${id}`,{}).subscribe(
        (data)=>{
          console.log(data);
          this.taskService.updateTasks();
        }
      )
    }

    //UPDATE TASK
    updateTask(id: number) {
      this.http.post(`${environment.postUrl}/${id}`,{}).subscribe(
        (data)=>{
          console.log(data);
          //UPDATE LIST
          this.taskService.updateTasks();
        }
      )
    }
    

}
