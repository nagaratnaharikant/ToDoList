import { slide } from './../../animate';
import { TodoService } from './../../services/todo.service';
import { Item, BindingObj } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css'],
  animations: [
    slide
]
})
export class DisplayListComponent implements OnInit {

  items: Item[];
  input: string;
  selectedItem: string;
  taskToDo;
  completedTask;
  // tslint:disable-next-line:no-inferrable-types
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private listService: TodoService) { }

  ngOnInit() {
    this.listService.getItems().subscribe(items => {
        this.items = items;
    });
    this.selectedItem = 'Filter List';
  }

  deleteItem(event, item) {
    this.listService.deleteItem(item);
    this.clearState();
  }

  editItem(event, item) {
    if (!item.completed) {
      this.editState = true;
      this.itemToEdit = item;
    }
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item) {
    this.listService.updateItem(item);
    this.clearState();
  }

  completed(event, item) {
    this.listService.completed(item);
  }

}
