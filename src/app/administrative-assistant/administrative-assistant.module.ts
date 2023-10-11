import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistantListComponent } from './assistant-list/assistant-list.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AssistantListComponent,
    DashboardComponent
  ],
  imports: [BrowserAnimationsModule,
    CommonModule,FormsModule,BrowserModule
  ]
})
export class AdministrativeAssistantModule { }
