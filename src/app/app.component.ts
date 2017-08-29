import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import {FormControl,FormGroup,Validators,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  userDetail = {};
  arrayList: any[] = [];
  genderArray: any[] = [];
  myform: FormGroup;
  Number:number;
  show: boolean = false;
  constructor(private _listService: ListService, private _dropDownService: DropDownService,private fb:FormBuilder) { }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
     
      myRatingControl:'',
      date:''
    }
    this.myform=this.fb.group(
      {
     name: new  FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('^[a-zA-Z]*$')]),
     myRatingControl:new  FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    lastName: new  FormControl('NA',[Validators.required,Validators.minLength(2),Validators.pattern('^[a-zA-Z]*$')]),
    date:new  FormControl('',[Validators.required]),
   
  
    }
  );
    this.genderArray = this._dropDownService.getDropDown();
  }

   submit(values) {
   
    console.log(values);
    let model = {
      name: values.name,
      myRatingContro:values.rating,
  
     date:values.date,
     lastName: values.lastName
     
    }
    
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
  customvalidate( formControl:FormControl){
    /*let err = (HTMLInputElement.length >= 3) ? '' : '';
    return err;*/
    if(formControl.value.lengthn >='3'){
      return formControl.value
    }
  else null
          
  }


}
