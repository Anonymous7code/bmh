import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { LabDashboardHomeComponent } from './lab-dashboard-home/lab-dashboard-home.component';
import { LabViewDetailsComponent } from './lab-dashboard-home/lab-view-details/lab-view-details.component';
import { LabDashboardComponent } from './lab-dashboard.component';
import { LabInvoiceComponent } from './lab-invoice/lab-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: LabDashboardComponent,
    children: [
      {
        redirectTo: 'lab-dashboard-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'lab-dashboard-home',
        component: LabDashboardHomeComponent,
      },
      {
        path: 'lab-view-details',
        component: LabViewDetailsComponent,
      },

      { path: 'lab-invoice', component: LabInvoiceComponent },
      {
        path: 'appointments',
        component: AppoinmentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabDashboardRoutingModule {}
