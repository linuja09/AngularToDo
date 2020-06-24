import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks = ["Add Remove Button", "Deploy to AWS"];
  taskvalue = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.tasks.push(this.taskvalue);
    this.taskvalue = '';
  }

}
