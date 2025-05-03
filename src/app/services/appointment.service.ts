import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private baseUrl = 'http://localhost:4600/api/appointment'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  rechercheRendezVous(dateOnly: string, professionalId: string) {
    return this.http.post<any>(`${this.baseUrl}/recherche`, { dateOnly, professionalId });
  }

  getProfessionals() {
    return this.http.get<any[]>('http://localhost:4600/api/users/allProfessionel'); // adapte le lien selon ton endpoint
  }
  ajouterRendezVous(data: any) {
    return this.http.post<any>(`${this.baseUrl}/reservations`, data);
  }
  getAppointmentsCalendarForClient(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/calendarClient/${clientId}`);
  }
  getAppointmentsCalendarForProf(profId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/calendar/${profId}`);
  }
  getClient(idprof : string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/getClient/${idprof}`)
  }
}
