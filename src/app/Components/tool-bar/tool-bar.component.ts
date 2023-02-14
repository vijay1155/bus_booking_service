import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDeatailsService } from 'src/app/services/bus-deatails.service';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent { 
  // storing the value of date, from city and tocity given by user
  from :any
  date : any
  to :any

  ifBusDatailsEntered = false;
  

  constructor(private busdetailsservice:BusDeatailsService, private router:Router){}

  

  //getdata method is for the send the date, from city ,to city to the service
selectseat=this.busdetailsservice.selectSeatEntered
  getdata()
  {
    this.busdetailsservice.getdate(this.date,this.from,this.to);
    this.ifBusDatailsEntered = true;
   
  } 
 
}


