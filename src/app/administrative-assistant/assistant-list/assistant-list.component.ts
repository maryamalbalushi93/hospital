import { Component } from '@angular/core';
import { AssistantService } from '../assistant.service';

@Component({
  selector: 'app-assistant-list',
  templateUrl: './assistant-list.component.html',
  styleUrls: ['./assistant-list.component.css']
})
export class AssistantListComponent {
  assistants: any[] = [];
  newAssistant: any = { name: '', department: '' };
  showAddAssistantForm: boolean | undefined;

  constructor(private assistantService: AssistantService) {}

  ngOnInit() {
    this.getAssistants();
  }

  getAssistants() {
    this.assistantService.getAssistants().subscribe((assistants: any) => {
      this.assistants = assistants;
    });
  }

  viewDetails(id: number) {
    this.assistantService.viewDetails(id).subscribe((assistant: any) => {
      console.log('Assistant Details:', assistant);
    });
  }

  addAssistant() {
    this.assistantService.addAssistant(this.newAssistant).subscribe((newAssistant: any) => {
      console.log('New Assistant Added:', newAssistant);
      this.getAssistants(); // Refresh the list after adding
      this.newAssistant = { name: '', department: '' }; // Reset the form
      this.showAddAssistantForm = false; // Hide the form after submission
    });
  }

  
 
  

  updateAssistant(id: number, updatedAssistant: any) {
    this.assistantService.updateAssistant(id, updatedAssistant).subscribe((updated: any) => {
      console.log('Assistant Updated:', updated);
    });
  }

  deleteAssistant(id: number) {
    this.assistantService.deleteAssistant(id).subscribe(() => {
      console.log('Assistant Deleted:', id);
      this.getAssistants(); // Refresh the list after deleting
    });
  }
}
