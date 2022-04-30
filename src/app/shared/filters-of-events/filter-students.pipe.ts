import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../_models/student';

@Pipe({
  name: 'filterStudents',
  pure: false
})
export class FilterStudentsPipe implements PipeTransform {

  transform(value: Student[], eventStudents:Student[]): Student[] {
    let eventStudentIDs:number[]=[];
    let filteredArray:Student[] = [];
    for (let es of eventStudents) {
      eventStudentIDs.push(es._id);
    }
    value.forEach(s=>{
      if(!eventStudentIDs.includes(s._id))
        filteredArray.push(s);
    })
    return filteredArray;
  }
}
