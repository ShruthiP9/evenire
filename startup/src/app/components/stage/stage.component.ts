import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../mock-event';
import {Event} from '../event';
import {EventService} from '../event.service';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  STGevents:Event[];

  constructor(private eservice:EventService ) { }

  ngOnInit() {
    this.STGevents=this.eservice.events;
  }

}
