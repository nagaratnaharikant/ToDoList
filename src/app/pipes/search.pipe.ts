import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform (items, textEntered: string): any {
    if (textEntered === undefined || textEntered === null || textEntered === '') {
      return items;
    }

    return items.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        return obj[key].toString().toLowerCase().includes(textEntered.toLowerCase());
      });
    });
  }
}
