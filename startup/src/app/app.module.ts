import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { CourseComponent } from './user/course/course.component';
import {CourseService} from './user/course.service';
import { PowerPipe } from './power.pipe';
import { PowerComponent } from './power/power.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteChildComponent } from './quote-child/quote-child.component';
import { StudentComponent } from './student/student.component';

import { ExhibitionTypeComponent } from './exhibition-type/exhibition-type.component';
import {RoutingModule} from './routing/routing.module';

import {EventService} from './event.service';

import { StageComponent } from './stage/stage.component';
import {ActivatedRoute} from '@angular/router'
import { EventDetailsComponent } from './event-details/event-details.component';
import { OtherComponent } from './other/other.component';



@NgModule({
  declarations: [
    AppComponent,
   /* UserComponent,
    CourseComponent,
    PowerPipe,
    PowerComponent,
    QuoteComponent,
    QuoteChildComponent,*/
    //StudentComponent,
  // EvenireComponent,
   ExhibitionTypeComponent,
  
   StageComponent,
  
   EventDetailsComponent,
  
   OtherComponent
  
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,

     
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

  
 }
