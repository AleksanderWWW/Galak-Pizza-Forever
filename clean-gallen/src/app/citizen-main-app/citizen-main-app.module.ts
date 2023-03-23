import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizenMainAppRoutingModule } from './citizen-main-app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import { DndDirective } from './dashboard/dnd.directive';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    DashboardComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    CitizenMainAppRoutingModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    CitizenMainAppRoutingModule
  ]
})
export class CitizenMainAppModule { }
