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
  fseats: any;
  seat: any;
  buses: any;
  busiddatedetails: any;

  selectSeatEntered = false;

  constructor(private busdata: BusDeatailsService, private http: HttpClient, private router: Router) {

  }
  bus: any = this.busdetail()
  busdetail() {
    this.busdata.buses().subscribe((a: any) => {
      this.details = a
    });


  }
  from = this.busdata.exportfrom;
  to = this.busdata.exportto;

  busidd: any;
  bustime: any;
  getbusid(id: any, time: any) {
    this.busidd = id;
    this.bustime = time
    sessionStorage.setItem("busid", this.busidd)
    sessionStorage.setItem("bustime", this.bustime)

    this.router.navigateByUrl("/costomer");
 
  }





}
