import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../_models/student';

@Pipe({
  name: 'filterStudentArray'
})
export class FilterStudentArrayPipe implements PipeTransform {

  transform(value: Student[], filterText:string): Student[] {
    let filtered:Student[]= [];
    for (const item of value) {
      if(item.Email.includes(filterText))
        filtered.push(item);
    }
    return filtered;
  }

}
