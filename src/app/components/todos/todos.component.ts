import { slide } from './../../animate';
import { Component } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Item } from './../../models/item';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    slide
]
})

export class TodosComponent {
  public item: Item = {
    name: '',
    category: '',
    date: new Date().toDateString(),
    completed: false
  };
  submitted = false;


  constructor(private listService: TodoService) { }

  onSubmit() {
    this.submitted = true;
    if (this.item.name !== '') {
      if (this.item.category === '') {
        this.item.category = 'default';
        this.listService.addItem(this.item);
      } else {
        this.listService.addItem(this.item);
      }
        this.item.name = '';
        this.item.category = '';
        this.submitted = false;
     }
  }
}
