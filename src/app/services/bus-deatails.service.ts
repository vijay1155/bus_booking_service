import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BusDeatailsService {

//this is made for the api call
//details variable is for store the record comming from the server
  details: any;

//exportdate exportfrom exportto are the variable for parameters to api from toolbarcomponent
  exportdate:any;
  exportfrom:any;
  exportto:any;
  exportSeatDetails: any;
  exportbusId:string
  exportIndex:number
  constructor(private http: HttpClient) { };


  // this fuction is for get request
  buses() {
    let params = new HttpParams();
    params = params.append("date", this.exportdate);
     params = params.append("from",this.exportfrom);
     params = params.append("to",this.exportto);
     return this.http.get(" https://zt336fv2s7.execute-api.ap-south-1.amazonaws.com/dev/busdetails",{params:params})
     
  }

//this is getdate() method is for taking data from toolbar component  along with date we take "from "city name and "to "seat name
  getdate(date:any,from:any,to:any)
  {//assigns the value that user give input
    this.exportfrom=from;
    this.exportto=to;
     this.exportdate=date;
    
    

  // this is testing for our from city and to city and are comming or not??
     console.log("hello this is exposrt "+this.exportfrom);
     console.log("hello this is exposrt "+this.exportto);
     console.log("hello this is exposrt "+this.exportdate)
  } 
  getSeatDetails(aseat:any, busId:any)
  {
    this.exportSeatDetails= aseat;
    this.exportbusId =busId
    this.exportIndex = busId-1;
    console.log("this is bus id", this.exportbusId)
    console.log("   this is the seat details",JSON.stringify(this.exportSeatDetails))
    console.log("this is bus id", this.exportIndex)
  }
  sendSeatdetails() :Observable<any>
  {///testing
    const data = {
      seats:this.exportSeatDetails,
      busid:  this.exportbusId,
      busIndex:  this.exportIndex ,
      date: this.exportdate
    };
   console.log("this is data have to send",data)
   console.log("this is Seatdata have to send",data.seats)
   console.log("this is index and id and date have to send",data.busIndex," ,",data.busid,",",data.date)
    
    return this.http.post(" https://zt336fv2s7.execute-api.ap-south-1.amazonaws.com/dev/busdetails",data);
    
     

  }
  selectSeatEntered=false;
  getseatselectOrNot(){
    this.selectSeatEntered=true;
  }
  
}
