import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabDashboardRoutingModule } from './lab-dashboard-routing.module';
import { LabDashboardComponent } from './lab-dashboard.component';
import { LabDashboardHomeComponent } from './lab-dashboard-home/lab-dashboard-home.component';
import { ManageTestComponent } from './manage-test/manage-test.component';
import { LabSettingsComponent } from './lab-settings/lab-settings.component';

@NgModule({
  declarations: [LabDashboardComponent, LabDashboardHomeComponent, ManageTestComponent, LabSettingsComponent],
  imports: [CommonModule, LabDashboardRoutingModule],
})
export class LabDashboardModule {
  constructor() {}
}
