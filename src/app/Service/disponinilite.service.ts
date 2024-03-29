import { Disponibilite } from './../Interface/disponinilite';
import { Employe } from './../Interface/employe';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DisponiniliteService {
  private readonly noAuthreqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  public readonly  AuthJSON = new HttpHeaders({ 'Content-Type': 'application/json' });
  public readonly RootUrl: string = 'http://localhost:9999/';

  disp: Disponibilite;
  constructor(private http: HttpClient) { }

  getAllDispo() {
    return this.http.get(`${API_URL}disponibilite`);
  }
  getAllEmploye(): Observable<Employe>{
    return this.http.get(`${API_URL}employee`) as Observable<Employe>;
  }
  getOneDispo(id: any) {
    console.log(id);
    return this.http.get(`${API_URL}disponibilite/${id}`);
  }
  upOneDispo(id: any , disp: Disponibilite){
    return this.http.put(`${API_URL}disponibilite/${id}`,disp) as Observable<Disponibilite>;
  }
  getDispInHor(idUC: any){
    const params = new HttpParams()
    .set('idUC', idUC);
    return this.http.get<Disponibilite>(`${API_URL}dispInHor`, {params});
  }
}
