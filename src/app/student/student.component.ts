import { Student } from './../../model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() students1?: Student[];
}
