import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitizenMainAppComponent} from "./citizen-main-app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: CitizenMainAppComponent,
    children: [
      {
        path: 'citizen-dashboard',
        component: DashboardComponent,
      },
      // {
      //   path: 'persons/:id', component: PersonDetailsComponent, children: [
      //     {
      //       path: '',
      //       redirectTo: 'device-table',
      //       pathMatch: 'full'
      //     },
      //     {
      //       path: 'chat', component: ChatComponent,
      //     },
      //     {
      //       path: 'device-table', component: DeviceTableComponent,
      //     },
      //     {
      //       path: 'statistics', component: StatisticsComponent,
      //     }]
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenMainAppRoutingModule { }
