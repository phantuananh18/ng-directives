import { Teacher } from './../../model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() teachers1?: Teacher[];
}
