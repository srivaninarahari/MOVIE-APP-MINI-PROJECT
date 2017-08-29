import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StarRatingModule } from 'angular-star-rating';
import { RootComponent } from './app.component';
import { DropDownService } from "app/service/drop-down.service";
import {     ReactiveFormsModule} from '@angular/forms';
import { RatingcolorDirective } from './ratingcolor.directive';
@NgModule({
  declarations: [
    RootComponent,
    RatingcolorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }
