import { Component, OnInit } from '@angular/core';
import { patient } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];
  newPatient: any = { name: '', age: null, condition: '', note: '', contact: '' };
  showAddPatientForm: boolean | undefined;

  constructor(private patientService: patient) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients().subscribe((patients: any) => {
      this.patients = patients;
    });
  }

  viewDetails(id: number) {
    this.patientService.viewPatientDetails(id).subscribe((patient: any) => {
      console.log('Patient Details:', patient);
    });
  }

  addPatient() {
    this.patientService.addPatient(this.newPatient).subscribe((newPatient: any) => {
      console.log('New Patient Added:', newPatient);
      this.getPatients(); // Refresh the list after adding
      this.newPatient = { name: '', age: null, condition: '', note: '', contact: '' }; // Reset the form
      this.showAddPatientForm = false; // Hide the form after submission
    });
  }

  updatePatient(id: number, updatedPatient: any) {
    this.patientService.updatePatient(id, updatedPatient).subscribe((updated: any) => {
      console.log('Patient Updated:', updated);
    });
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
      console.log('Patient Deleted:', id);
      this.getPatients(); // Refresh the list after deleting
    });
  }
}