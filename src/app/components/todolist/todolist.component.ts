import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

   tasks: any[] = [];

  constructor(private apiservices: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.apiservices.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  createTask(title: string): void {
    this.apiservices.createTask({ title, completed: false }).subscribe(() => {
      this.loadTasks();
    });
  }

}
