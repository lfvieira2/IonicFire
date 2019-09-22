import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { Firestore } from 'src/app/core/classes/firestore.class';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends Firestore<Task> {
  constructor(db: AngularFirestore) {
    super(db);
  }
}
