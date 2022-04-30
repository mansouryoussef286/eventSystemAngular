import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';

@Pipe({
  name: 'filterMainSpeaker',
  pure:false
})
export class FilterMainSpeakerPipe implements PipeTransform {

  transform(value: Speaker[],mainSpeaker:Speaker): Speaker[] {
    let filteredArray:Speaker[]= [];
    for (const speaker of value) {
      if(speaker._id != mainSpeaker._id)
        filteredArray.push(speaker);
    }
    return filteredArray;
  }

}
