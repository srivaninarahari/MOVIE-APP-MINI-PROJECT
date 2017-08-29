import { Directive,HostListener,HostBinding,Input } from '@angular/core';
import {CommonModule} from '@angular/common';



@Directive({
  selector: '[appRatingcolor]'
})
export class RatingcolorDirective {
  @Input() myRatingControl: number;

  @Input()rowIndex:number;//SHOW  INDEX  VALUE
  //LOGIC  FOR  MOUSE  ENTER
  @HostListener('mouseenter') onmouseover(){
    if(this.myRatingControl !==1){
        this.color = "pink";
      }
      else {
         this.color = "red";
      }
  }
  
  //LOGIC  FOR  MOUSE  LEAVE
  @HostListener('mouseleave') onMouseLeave() {
     this.color= "black";
    }
  
  @HostBinding('style.color') color:string;
    constructor() { }
  
  }