import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TodosComponent } from './components/todos/todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { FilterlistPipe } from './pipes/filterlist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DisplayListComponent,
    SearchPipe,
    FilterlistPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    AngularFirestoreModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
