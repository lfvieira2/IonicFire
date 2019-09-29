import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';
import { async } from 'q';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss']
})
export class TasksListPage {
  tasks$: Observable<Task[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private tasksService: TasksService
  ) {}

  ionViewDidEnter(): void {
    this.tasks$ = this.tasksService.getAll();
  }

  onUpdate(task: Task): void {
    this.navCtrl.navigateForward(['tasks', 'edit', task.id]);
  }

  async onDelete(task: Task): Promise<void> {
    await this.overlayService.alert({
      message: `Do you really want to delete the task "${task.title}"?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.tasksService.delete(task);
            await this.overlayService.toast({
              message: `Task "${task.title}" deleted!`
            });
          }
        },
        'No'
      ]
    });
  }
}
