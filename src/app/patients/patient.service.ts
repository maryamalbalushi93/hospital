
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class patient {
  private apiUrl = 'http://localhost:3003/patients';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post(this.apiUrl, patient);
  }

  viewPatientDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePatient(id: number, updatedPatient: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedPatient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


