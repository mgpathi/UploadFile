import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AdmindashboardComponent
  ],
  declarations: [AdmindashboardComponent]
})
export class AdminModule { }
