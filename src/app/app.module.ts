import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { TodoComponent } from './components/todo.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './components/task.component';
import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    MaterialsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
