import { Component, Input } from '@angular/core';
import { todoItem } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myDay3ToDoApp';

  @Input()
  newTodoItem: todoItem;
}
