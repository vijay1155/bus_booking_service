import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BusDeatailsService } from 'src/app/services/bus-deatails.service';

@Component({
  selector: 'app-costomer-details',
  templateUrl: './costomer-details.component.html',
  styleUrls: ['./costomer-details.component.css']
})
export class CostomerDetailsComponent {
  constructor(private seatdata:BusDeatailsService,http:HttpClient) { };

  //variables for displaying bus details
  from = this.seatdata.exportfrom
  to =this.seatdata.exportto
  date =this.seatdata.exportdate
  time=sessionStorage.getItem("bustime");
  bus: any = this.seatdetails()
  ///
  details: any
  fseats: any
  aseat: any[];
  bookinfSuccsesfull= false;
 
  buses: any;
   busId = Number(sessionStorage.getItem("busid"));
  
  seatdetails() {
    
    this.seatdata.buses().subscribe((a: any) => {
  
      this.details = a

      if(this.busId<4){
           this.aseat= a[this.busId-1].seat;
        
      }
      else{
        this.aseat =a[(this.busId%3)-1].seat
       
      }
    });
  }
  
  
  selectedseats:{number:string,name:string;gender:string,booked:boolean,selected:boolean}[]=[];
  totalPrice = 0;
  selectSeat(seat:any) {
    if (!seat.booked) {
      seat.selected = !seat.selected;
      if(seat.selected){
        this.selectedseats.push({number:seat.number,name:seat.name,gender:seat.gender,booked:true,selected:false});
        this.totalPrice +=500;  
      } 
      else{ 
        const index = this.selectedseats.indexOf({number:seat.number,name:seat.name,gender:seat.gender,booked:seat.booked,selected:seat.selected});
        this.selectedseats.splice(index, 1);
        this.totalPrice-=500
      } 
 
    }   
  } 
  
  showSelectedSeats=false
  bookNow() { 
    
    this.showSelectedSeats = true;
  } 
  updatedseats:any[]
  
   bookked(){
    this.updatedseats=this.updated(this.aseat,this.selectedseats)
    
   }
  
updated(seats,selectedseat){
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      for (const item2 of selectedseat) {
        if (seats[i][j].number === item2.number) {
          seats[i][j] = item2;
          break;
        }
      }
    }
  } return seats;
}
busIndex=this.busId-1
getSeatsDetails(){
  this.seatdata.getSeatDetails(this.updatedseats,this.busId);
  this. bookinfSuccsesfull= true;
  this.seatdata.sendSeatdetails().subscribe((a:any)=>{})
 } 
  
}
