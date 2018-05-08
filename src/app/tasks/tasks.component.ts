import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {
  @Input() listTask;
  @Output() removeTask = new EventEmitter<string>();

  ngOnInit() {}

  onRemoveTask(task: string) {
    this.removeTask.emit(task);
  }
}
