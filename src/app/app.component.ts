import { Component } from '@angular/core';
import { Student, Teacher } from 'src/model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-directives';
  students: Student[] = [new Student(1, 'John'), new Student(2, 'Paul')];
  teachers: Teacher[] = [new Teacher(1, 'Mary'), new Teacher(2, 'Tom')];
}
