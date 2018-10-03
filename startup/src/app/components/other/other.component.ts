import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {Event} from '../event';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  eventDetails:Event;
  same1:Event[];
  
   
   constructor(private route:ActivatedRoute,private eservice:EventService) { }
 
   ngOnInit() {
     this.route.paramMap
     .subscribe(params=>{
       let eveName=params.get('sname');
       this.eventDetails=this.eservice.getEvent(eveName);
     })
    
 this.same1=this.eservice.events;
    
   }
  }
