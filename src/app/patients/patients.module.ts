import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';

export interface Patient {
  id?: number;
  name: string;
  age: number;
  condition: string;
  note: string;
  contact: string;
}

@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class PatientsModule { }
