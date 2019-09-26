import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-save',
  templateUrl: './task-save.page.html',
  styleUrls: ['./task-save.page.scss']
})
export class TaskSavePage implements OnInit {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      done: [false]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Saving...'
    });
    try {
      const task = await this.tasksService.create(this.taskForm.value);
      console.log('Task created ', task);
      this.navCtrl.navigateBack('/tasks');
    } catch (error) {
      console.log('Error save Task:', error);
    } finally {
      loading.dismiss();
    }
  }
}
