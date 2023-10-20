import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
@Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-laptop-house',
      routerLink: 'manage/dashboard'
    },
    {
      number: '2',
      name: 'students',
      icon: 'fa-solid fa-users ',
      routerLink: 'manage/students'
    },
    {
      number: '3',
      name: 'teachers',
      icon: 'fa-solid fa-chalkboard-teacher',
      routerLink: 'manage/teachers'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
