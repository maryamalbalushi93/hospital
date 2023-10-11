import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  
  doctors: any[] = [];
  newDoctor: any = { name: '', specialization: '', doctorContact: '' };
  showAddDoctorForm: boolean | undefined;

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.getDoctors();
  }

 
  getDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: any) => {
      this.doctors = doctors;
    });
  }

  viewDetails(id: number) {
    // Your implementation here
    this.doctorService.viewDetails(id).subscribe((doctor: any) => {
      console.log('Doctor Details:', doctor);
    });
  }

  addDoctor() {
    this.doctorService.addDoctor(this.newDoctor).subscribe((newDoctor: any) => {
      console.log('New Doctor Added:', newDoctor);
      this.getDoctors(); // Refresh the list after adding
      this.newDoctor = { name: '', specialization: '', doctorContact: '' }; // Reset the form
      this.showAddDoctorForm = false; // Hide the form after submission
    });
  }

  updateDoctor(id: number, updatedDoctor: any) {
    this.doctorService.updateDoctor(id, updatedDoctor).subscribe((updated: any) => {
      console.log('Doctor Updated:', updated);
    });
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe(() => {
      console.log('Doctor Deleted:', id);
      this.getDoctors(); // Refresh the list after deleting
    });
  }
}