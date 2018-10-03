import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {Event} from '../event';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventDetails:Event;
  same:Event[]; 
  
  constructor(private route:ActivatedRoute,private eservice:EventService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      let eveName=params.get('ename');
      this.eventDetails=this.eservice.getEvent(eveName);
    })
   
this.same=this.eservice.events;
   
  }

}
