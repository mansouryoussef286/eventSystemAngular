import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterArrayPipe } from './filters-of-events/filter-array.pipe';
import { FilterMainSpeakerPipe } from './filters-of-events/filter-main-speaker.pipe';
import { FilterSpeakersPipe } from './filters-of-events/filter-speakers.pipe';
import { FilterStudentsPipe } from './filters-of-events/filter-students.pipe';
import { FilterStudentArrayPipe } from './filter-student-array.pipe';
import { FilterSpeakerArrayPipe } from './filter-speaker-array.pipe';



@NgModule({
  declarations: [
    FilterArrayPipe,
    FilterMainSpeakerPipe,
    FilterSpeakersPipe,
    FilterStudentsPipe,
    FilterStudentArrayPipe,
    FilterSpeakerArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterArrayPipe,
    FilterMainSpeakerPipe,
    FilterSpeakersPipe,
    FilterStudentsPipe,
    FilterStudentArrayPipe,
    FilterSpeakerArrayPipe
  ]
})
export class SharedModule { }
