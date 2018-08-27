import {Component,  OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../services/task.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[];
  currentPath = this.location.path();

  constructor(private taskService: TaskService, private location: Location) { }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
    console.log(this.currentPath);
  }
}



