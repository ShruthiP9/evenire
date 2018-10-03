import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {EventService} from '../event.service';
import { ExhibitionTypeComponent } from '../exhibition-type/exhibition-type.component';
import {StageComponent} from '../stage/stage.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { OtherComponent } from '../other/other.component';

//import{RouterModule } from '@angula r/router'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path:'exhibition-type',component:ExhibitionTypeComponent},
        {path:'stage',component:StageComponent},
        {path:'eventDetails/:ename',component:EventDetailsComponent},
        {path:'otherDetails/:sname',component:OtherComponent}
        
    ])
   
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
