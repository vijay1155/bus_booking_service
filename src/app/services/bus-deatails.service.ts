import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BusDeatailsService {

apiUrl = " https://zt336fv2s7.execute-api.ap-south-1.amazonaws.com/dev/busdetails"
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
     return this.http.get(this.apiUrl,{params:params})
     
  }

//this is getdate() method is for taking data from toolbar component  along with date we take "from "city name and "to "seat name
  getdate(date:any,from:any,to:any)
  {//assigns the value that user give input
    this.exportfrom=from;
    this.exportto=to;
     this.exportdate=date;

  } 
  getSeatDetails(aseat:any, busId:any)
  {
    this.exportSeatDetails= aseat;
    this.exportbusId =busId
    this.exportIndex = busId-1;
   
  }
  sendSeatdetails() :Observable<any>
  {
    const data = {
      seats:this.exportSeatDetails,
      busid:  this.exportbusId,
      busIndex:  this.exportIndex ,
      date: this.exportdate
    };
  
    return this.http.post(this.apiUrl,data);
  }
  selectSeatEntered=false;

}
