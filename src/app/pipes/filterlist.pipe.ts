import { Pipe, PipeTransform } from '@angular/core';
import { Form } from '@angular/forms';

@Pipe({
  name: 'filterlist'
})
export class FilterlistPipe implements PipeTransform {

  transform(items: any, sel: string): any {
    return items.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        if (sel === 'all') {
          return obj;
        } else if (sel === 'notDone') {
          return obj.completed === false;
        } else if (sel === 'completed') {
          return obj.completed === true;
        } else {
            return obj;
        }
      });
    });
  }
}
