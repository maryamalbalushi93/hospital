import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { FormsModule } from '@angular/forms';

export interface Doctor {
  id?: number; // Make id optional
  name: string;
  specialization: string;
  doctorContact: string;
}


@NgModule({
  declarations: [
    DoctorListComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class DoctorsModule { }
