import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../_models/student';

@Pipe({
  name: 'filterStudents',
  pure: false
})
export class FilterStudentsPipe implements PipeTransform {

  transform(students: Student[], eventStudents:Student[]): Student[] {
    // console.log("event students");
    // console.log(eventStudents);
    // console.log("all students");
    // console.log(students);
    
    let filteredArray:Student[] = [];
    for (let student of students) {
      // console.log(student)
      // console.log(!students.includes(student))
      if(eventStudents.includes(student) == false)
        filteredArray.push(student);
    }
    // console.log("filtered array")
    // console.log(filteredArray)
    return filteredArray;
  }

}
