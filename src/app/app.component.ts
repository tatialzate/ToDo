import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = ['attend the boot camp', 'do the homework', 'bring candy to Juan', 'participate'];

  getTask(task: string) {
    this.tasks.push(task);

  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter(tasks => tasks !== task);
  }
}
