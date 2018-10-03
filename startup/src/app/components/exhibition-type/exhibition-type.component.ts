import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../mock-event';
import {Event} from '../event';
import {EventService} from '../event.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-exhibition-type',
  templateUrl: './exhibition-type.component.html',
  styleUrls: ['./exhibition-type.component.css']
})
export class ExhibitionTypeComponent implements OnInit {
  Exevents:Event[];

  constructor(private eservice:EventService ) {

  }

  ngOnInit() {
    this.Exevents=this.eservice.events;
  }

}
