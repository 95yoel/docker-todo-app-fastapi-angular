import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Responses } from 'src/interfaces/responses';
import { Tasks } from 'src/interfaces/tasks';
import { TaskUpdateService } from 'src/app/services/task/task-update.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  show:boolean=false;

  taskFormControl = new FormControl('', [ Validators.maxLength(50)]);

  tasks: Tasks[] = [];
  
  constructor(private http:HttpClient,
              private taskService:TaskUpdateService){}

  ngOnInit(){
    
    // VERIFY LENGHT OF INPUT TO ACTIVATE SUBMIT BUTTON
    this.updateFormValue();

    
    // VERIFY IS BACKEND IS WORKING
    this.http.get<Responses>(environment.backendUrl).subscribe((data) => {
      const status = data.status;
      console.log(status); 
    });
  }

  
  // METHOD FOR UPDATE INPUT AND ACTIVATE BUTTON OR CLEAN INPUT
  updateFormValue() {
    if (this.taskFormControl && this.taskFormControl.value) {
      const value = this.taskFormControl.value;
      if (value.length > 3 && value.length <= 50) {
        this.show = true;
      } else {
        this.show = false;
      }
  
      // DONT LET INPUT EXCEED 50 CHAR
      if (value.length === 50) {
        this.taskFormControl.setValue('');
      }
    }
  }
  

  // SUBMIT FUNCTION
  submit() {
    
    const task = {
      desc: this.taskFormControl.value,
      status: false
    };
    
    //SEND TASK DATA TO THE DATABASE
    this.http.post(environment.createUrl,task).subscribe(
      (data)=>{
        console.log(data);

        //CLEAN THE INPUT
        this.taskFormControl.setValue('');
        //UPDATE TASKS LIST
        this.taskService.updateTasks();
      }
    );
    

  }
  

}



