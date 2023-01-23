import { Component } from '@angular/core';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-seat-arrangement',
  templateUrl: './seat-arrangement.component.html',
  styleUrls: ['./seat-arrangement.component.css']
})
export class SeatArrangementComponent {
  toggle = true;
  toggle1 = true;

  myVariable:string;
  buttonClicked = false;
  clickCount=0;

  arr = [];
  arrnum:any;
   
  status ="Enable";
  status1 = "Enable";
  enableDisableRule(job:any )
  {
    this.toggle1 = !this.toggle1;
    this.status1 =this.toggle ? "Enable" : "Disable";
  }




save(num:any)
{
  this.clickCount++;
  if(this.clickCount===1)
  {
    this.arr.push(num);
  }
  else if (this.clickCount===2)
  {
    let index = this.arr.indexOf(num);
    if (index !== -1) 
    {
    this.arr.splice(index, 1);
    this.clickCount=0;
    }
  }
}

show(){
  console.log()
}

/////////////////////////////////////






}



    
    

