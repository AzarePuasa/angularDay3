import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'

// enum Priority {
//   High,
//   Medium,
//   Low
// }

export interface todoItem{
  description: string;
  priority: string;
  duedate: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  @Output()
  newTodoitem = new EventEmitter<todoItem>();

  constructor() { }

  ngOnInit() {
  }

  addNewTodo(form: NgForm)
  {
    var form_description = form.value.description;
    var form_priority = form.value.priority

    var dateObj = form.value.duedate 

    var form_datedue = dateObj['_i']['date'] + "/" + dateObj['_i']['month'] +
     "/" + dateObj['_i']['year'];

    const newTodo: todoItem = {  description: form_description,
      priority: form_priority,
      duedate: form_datedue};

          //description
    console.log("Description: ", newTodo.description);
    //priority
    console.log("Priority: ", newTodo.priority);
    //duedate
    console.log("Due Date: ", newTodo.duedate);

    this.newTodoitem.next(newTodo);
  }

}
