import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { SeatArrangementComponent } from './Components/seat-arrangement/seat-arrangement.component';
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';
import {MatCardModule} from '@angular/material/card';
import { BusdetailCardComponent } from './Components/busdetail-card/busdetail-card.component';

@NgModule({
  declarations: [
    AppComponent ,
    HomeComponent,
    SeatArrangementComponent,
    ToolBarComponent,
    BusdetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatCardModule
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
