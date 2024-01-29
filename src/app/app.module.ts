import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TreeModule} from "primeng/tree";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {SplitterModule} from "primeng/splitter";
import {AngularSplitModule} from "angular-split";
import {TooltipModule} from "primeng/tooltip";
import { FunctionalChartComponent } from './functional-chart/functional-chart.component';
import { DiagnoseToolComponent } from './diagnose-tool/diagnose-tool.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {OrganizationChartModule} from "primeng/organizationchart";
import {DialogModule} from "primeng/dialog";
import {TabMenuModule} from "primeng/tabmenu";

@NgModule({
  declarations: [
    AppComponent,
    FunctionalChartComponent,
    DiagnoseToolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeModule,
    ProgressSpinnerModule,
    TableModule,
    ButtonModule,
    SplitterModule,
    AngularSplitModule,
    TooltipModule,
    RouterOutlet,
    AppRoutingModule,
    OrganizationChartModule,
    DialogModule,
    TabMenuModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
