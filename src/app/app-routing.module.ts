import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { AssistantListComponent } from './administrative-assistant/assistant-list/assistant-list.component';
import { ReportingComponent } from './reporting/reporting/reporting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { patient } from './patients/patient.service';
import { AdministrativeAssistantModule } from './administrative-assistant/administrative-assistant.module';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {path:'Dashboard',component:DashboardComponent},
  { path: 'doctors', component: DoctorListComponent  },
  { path: 'patients', component: PatientListComponent },
  { path: 'assistants', component: AssistantListComponent },
  { path: 'reporting', component: ReportingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
