import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  // Injection de dépendance : Injecter le service HttpClient dans le constructeur
  // HttpClient est un service Angular qui permet de faire des requêtes HTTP (GET, POST, PUT, DELETE)
  constructor(private http : HttpClient) { }

  // getAllFilm() : Observable<any> : 
  // Observable est un objet qui permet de faire des requêtes HTTP (GET, POST, PUT, DELETE), 
  // asyncronne et non bloquant, on peut souscrire à l'observable et recevoir les données, (c'est comme un flux de données qui envoie des valeurs au fil du temps)
  getAllFilm() : Observable<any>{
    return this.http.get("http://localhost:8080/api/v0/movies")
  }

  delete(id : number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/v0/movies/${id}`)
  }

  register(data : any) : Observable<any>{
    return this.http.post("http://localhost:4600/api/auth/register" , data)
  }

  getFilmById(id : number) : Observable<any>{
    return this.http.get(`http://localhost:8080/api/v0/movies/${id}`)
  }

  updateFilm(id : number , data : any) :Observable<any>{
    return this.http.put(`http://localhost:8080/api/v0/movies/${id}` , data)
  }
}
