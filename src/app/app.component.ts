import { Component } from '@angular/core';
import { Task } from './tasks';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listTasks: Task[] = [];
  tasks: Task[] = [];
  itemsActive: Task[] = [];
  url = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';

  constructor(private http: HttpClient) {
    this.http.get(this.url)
      .subscribe((data: string[]) => {
        data.map(data => {
          this.getTask(data);
        });
      });
  }

  getTask(task: string) {
    this.listTasks.unshift(
      { id: uuid(), text: task, state: false }
    );
    this.showAllTask();
    this.activeTask();
  }

  deleteTask(id: string) {
    this.tasks = this.listTasks.filter(task => task.id !== id);
    this.activeTask();
  }

  activeTask() {
    this.itemsActive = this.listTasks.filter(item => !item.state);
  }

  showActiveTask() {
    this.tasks = this.itemsActive;
  }

  showCompletedTask() {
    this.tasks = this.listTasks.filter(item => item.state);
    console.log(this.tasks);
  }

  showAllTask() {
    this.tasks = this.listTasks;
  }
}
