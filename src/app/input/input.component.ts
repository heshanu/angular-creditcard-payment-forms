import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

   @Input() controls: FormControl | any;
   @Input() label:any;
  
  constructor() { }
  showErrors(){
    const {dirty,touched,errors}=this.controls;
    return dirty && touched && errors;
  }
  ngOnInit(): void {}
}
