import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DiagnoseToolComponent} from "./diagnose-tool/diagnose-tool.component";
import {FunctionalChartComponent} from "./functional-chart/functional-chart.component";

const routes: Routes = [
  { path: '', component: DiagnoseToolComponent },
  { path: 'chart', component: FunctionalChartComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
