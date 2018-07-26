import { Item } from './../models/item';
import { Injectable } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;
  isDesc = false;
  column;
  direction: number;
  item: Array<Item>;

  constructor(public db: AngularFirestore) {
      this.items = this.db.collection('todo').valueChanges();
      this.items = this.db.collection('todo').snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      });

      this.itemCollection = this.db.collection('todo');

  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    console.log(item);
    this.itemCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.db.doc(`todo/${item.id}`);
    console.log(this.itemDoc);
    this.itemDoc.delete();
    console.log('item deleted');
  }

  updateItem(item: Item) {
    this.itemDoc = this.db.doc(`todo/${item.id}`);
    this.itemDoc.update(item);
  }

  completed(item: Item) {
    item.completed = !item.completed;
    this.itemDoc = this.db.doc(`todo/${item.id}`);
    this.itemDoc.update(item);
  }
}

