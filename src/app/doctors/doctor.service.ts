import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:3003/doctors';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  viewDoctorDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addDoctor(doctor: any): Observable<any> {
    return this.http.post(this.apiUrl, doctor);
  }

  updateDoctor(id: number, updatedDoctor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedDoctor);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  viewDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}