import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';


const MODULES = [ MatInputModule, MatCardModule, MatToolbarModule, 
  MatIconModule, MatRadioModule, MatButtonModule, 
  BrowserAnimationsModule, MatDividerModule, MatListModule, 
  MatMomentDateModule, MatDatepickerModule]


@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})

export class MaterialsModule { }
