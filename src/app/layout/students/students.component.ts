import { Component } from '@angular/core';
import { studentsData } from 'src/sharedData/studentsData';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students_data = studentsData
}
