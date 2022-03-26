import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentHighLightDirective } from './student-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    StudentHighLightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
