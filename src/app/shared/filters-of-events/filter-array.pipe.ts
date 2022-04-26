import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../../_models/event';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: Event[], filterText:string): Event[] {
    let filtered:Event[]= [];
    for (const item of value) {
      if(item.title.includes(filterText))
        filtered.push(item);
    }
    return filtered;
  }

}
