import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusdetailCardComponent } from './Components/busdetail-card/busdetail-card.component';
import { HomeComponent } from './Components/home/home.component';
import { SeatArrangementComponent } from './Components/seat-arrangement/seat-arrangement.component';
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'toolbar',component:ToolBarComponent},{
  path:'busdetail',component:BusdetailCardComponent
},{path:'seat',component:SeatArrangementComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
