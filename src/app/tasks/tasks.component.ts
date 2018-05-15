import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {
  @Input() task;
  @Input() id;
  @Output() removeTask = new EventEmitter<string>();
  @Output() activeTask = new EventEmitter<{}>();

  ngOnInit() { }

  onRemoveTask(id: string) {
    this.removeTask.emit(id);
  }

  onGetStyle(state: boolean) {
    return state ? 'item--select' : '';
  }

  onChangeState(task) {
    task.state = !task.state;
    this.activeTask.emit(task);
    return task.state;
  }
}
