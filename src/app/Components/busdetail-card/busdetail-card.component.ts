import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDeatailsService } from 'src/app/services/bus-deatails.service';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';


@Component({
  selector: 'app-busdetail-card',
  templateUrl: './busdetail-card.component.html',
  styleUrls: ['./busdetail-card.component.css']
})
export class BusdetailCardComponent {
  details: any;
  fseats:any;
  seat:any;
  buses:any;
  busiddatedetails:any;

  selectSeatEntered= false;
  
  constructor(private busdata: BusDeatailsService, private http: HttpClient,private router: Router ) {
  
    }
   bus : any= this.busdetail()
    busdetail()
    {
      
      this.busdata.buses().subscribe((a:any)=>{
       // console.log(a);
      this.details = a
      // this.busiddatedetails=a
      console.log( this.busiddatedetails)
      console.log(this.details)
      this.fseats = a.seat
      console.log(this.fseats)});


    }

    


      
    
  from =this.busdata.exportfrom;
  to = this.busdata.exportto; 

busidd:any;
bustime:any;
  getbusid(id:any,time:any)
  {
    this.busidd = id;
    this.bustime =time
    sessionStorage.setItem("busid",this.busidd)
    sessionStorage.setItem("bustime",this.bustime)
    console.log("this is selected bus id" + this.busidd);
   this.router.navigateByUrl("/costomer");
    this.busdata. getseatselectOrNot();


    

  }
  

  
  

}
