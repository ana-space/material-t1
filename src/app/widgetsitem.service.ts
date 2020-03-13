import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IItemsItem } from './data/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetsitemService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getWidgets(): Observable<IItemsItem[]> {
    return  this.http.get<IItemsItem[]>(`${this.BASE_URL}/widget`)
  }

  createAppointment(appointmentDate: string, name: string, email: string) : Observable<IItemsItem> {
    return this.http.post<IItemsItem>(`${this.BASE_URL}/widget`, 
    {appointmentDate, name, email})
  }
  cancelAppointment(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/IItemsItem/${id}`);
  }
}
