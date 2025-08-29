import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Titulo } from './models/titulo.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TituloService {
  private apiUrl = 'http://localhost:5000/api/titulos';

  constructor(private http: HttpClient) {}

  adicionarTitulo(titulo: Titulo): Observable<any> {
    return this.http.post(this.apiUrl, titulo);
  }

  listarTitulos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
