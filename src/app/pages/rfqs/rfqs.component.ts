import { Component, OnInit } from '@angular/core';
import { RfqEmployee, RfqStatus, RfqService } from './rfqs-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rfqs',
  templateUrl: './rfqs.component.html',
  styleUrls: ['./rfqs.component.css'],
  providers: [RfqService]
})
export class RfqsComponent implements OnInit {


  dataSource: RfqEmployee[];
  states: RfqStatus[];
  events: Array<string> = [];
  
  constructor(service: RfqService, private router: Router) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    console.log(this.dataSource);
  }
  public createRecord() {
    
    this.router.navigate(['/rfqs/create'])
  }
  public viewRecord(_id:string) {
    
    this.router.navigate(['/rfqs/view', _id ])
  }
  public updateRecord(_id:string) {
    
    this.router.navigate(['/rfqs/update', _id])
  }
  public deleteRecord(_id:string) {

  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

  ngOnInit() {

  }
}
