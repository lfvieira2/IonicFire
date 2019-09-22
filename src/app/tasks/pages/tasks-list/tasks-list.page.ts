import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss']
})
export class TasksListPage implements OnInit {
  tasks$: Observable<Task[]>;

  constructor() {}

  ngOnInit(): void {
    this.tasks$ = of([
      { id: 'asdasd', title: 'Aprender Ionic', done: false },
      { id: 'asfasf', title: 'Aprender Firestore', done: false }
    ]);
  }
}
