import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from '../_models/speaker';

@Pipe({
  name: 'filterSpeakerArray'
})
export class FilterSpeakerArrayPipe implements PipeTransform {

  transform(value: Speaker[], filterText:string): Speaker[] {
    let filtered:Speaker[]= [];
    for (const item of value) {
      if(item.username.includes(filterText))
        filtered.push(item);
    }
    return filtered;
  }

}
