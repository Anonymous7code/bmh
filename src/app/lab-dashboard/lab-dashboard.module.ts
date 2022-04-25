import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabDashboardRoutingModule } from './lab-dashboard-routing.module';
import { LabDashboardComponent } from './lab-dashboard.component';
import { LabDashboardHomeComponent } from './lab-dashboard-home/lab-dashboard-home.component';

@NgModule({
  declarations: [LabDashboardComponent, LabDashboardHomeComponent],
  imports: [CommonModule, LabDashboardRoutingModule],
})
export class LabDashboardModule {
  constructor() {}
}
