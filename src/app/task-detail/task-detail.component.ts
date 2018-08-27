import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../task';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../services/task.service';
import {NorthwindService} from '../services/northwind.service';
import {NorthWindData} from '../northWindData';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})


export class TaskDetailComponent implements OnInit {

  @Input() task: Task;
  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location,
              private northWindService: NorthwindService) { }
  windData: any;
  windRes: NorthWindData[];



  ngOnInit() {
    this.getTask();
    this.getNwData();
  }
  getTask(): void {
    const id =  +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  getNwData(): void {
    this.northWindService.getData().subscribe(
      windData => this.windData = windData,
      (err) => console.error(err),
      ( ) => this.sortNwData(this.windData));
  }

  sortNwData(windData): void {
    this.windRes = [];
    let currentCountry;
    for (let i = 0; i < windData.Customers.length; i++) {
        if ( this.windRes.find(function (records) {return records.country === windData.Customers[i].Country; })) {
          console.log(windData.Customers[i].Country + ' already exists');
          currentCountry = this.windRes.find(function (records) {return records.country === windData.Customers[i].Country; });
          if (currentCountry.city.indexOf(windData.Customers[i].City) === -1) {
            currentCountry.city.push(windData.Customers[i].City);
            console.log('added ' + windData.Customers[i].City);
          }
          console.log(currentCountry.city);
        } else {
          console.log(windData.Customers[i].Country + ' not found');
          this.windRes.push({country: windData.Customers[i].Country, city: [windData.Customers[i].City]});
          console.log(windData.Customers[i].City);
        }
    }
    console.log(this.windRes);
  }

}
