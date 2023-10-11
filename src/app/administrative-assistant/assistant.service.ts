import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {
  private apiUrl = 'http://localhost:3003/assistants';

  constructor(private http: HttpClient) {}

  getAssistants() {
    return this.http.get(this.apiUrl);
  }

  viewDetails(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addAssistant(assistant: any) {
    return this.http.post(this.apiUrl, assistant);
  }

  updateAssistant(id: number, updatedAssistant: any) {
    return this.http.put(`${this.apiUrl}/${id}`, updatedAssistant);
  }

  deleteAssistant(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
