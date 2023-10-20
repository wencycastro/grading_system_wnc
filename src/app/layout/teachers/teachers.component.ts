import { Component } from '@angular/core';
import { teachersData } from 'src/sharedData/teachersData';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  teachers_data = teachersData
}
