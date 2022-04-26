import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../../_models/event';
import { Speaker } from '../../_models/speaker';

@Pipe({
  name: 'filterSpeakers',
  pure: false
})
export class FilterSpeakersPipe implements PipeTransform {

  transform(value: Speaker[], eventSpeakers:Speaker[]): Speaker[] {
    let filteredArray:Speaker[]= [];
    for (const speaker of value) {
      if(!eventSpeakers.includes(speaker))
        filteredArray.push(speaker);
    }
    return filteredArray;
  }

}
