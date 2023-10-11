import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DoctorService } from './doctors/doctor.service';
import { patient } from './patients/patient.service';
import { AssistantService } from './administrative-assistant/assistant.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';

import { DoctorsModule } from './doctors/doctors.module'; // Import the Doctors module
import { PatientsModule } from './patients/patients.module'; // Import the Patients module
import { AdministrativeAssistantModule } from './administrative-assistant/administrative-assistant.module'; // Import the Assistants module
import { ReportingModule } from './reporting/reporting.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    DoctorsModule,
    PatientsModule,
    AdministrativeAssistantModule,
    ReportingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DoctorService,patient,AssistantService,HttpClient,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
