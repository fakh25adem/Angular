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
  login(data: any): Observable<any> {
    return this.http.post(`http://localhost:4600/api/auth/login`, data);
  }
  getFilmById(id : number) : Observable<any>{
    return this.http.get(`http://localhost:8080/api/v0/movies/${id}`)
  }

  updateFilm(id : number , data : any) :Observable<any>{
    return this.http.put(`http://localhost:8080/api/v0/movies/${id}` , data)
  }
  // Gestion du token et de l'utilisateur connecté
private currentUser: any = null;

setUser(user: any, token: string) {
  this.currentUser = user;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
}

getUser() {
  if (!this.currentUser) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }
  return this.currentUser;
}

getToken() {
  return localStorage.getItem('token');
}

logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  this.currentUser = null;
}

getUserById(id: string): Observable<any> {
  const headers = {
    headers: {
      Authorization: `Bearer ${this.getToken()}`
    }
  };
  return this.http.get(`http://localhost:4600/api/user/One/${id}`, headers);
}

updateUser(id: string, data: any): Observable<any> {
  const headers = {
    headers: {
      Authorization: `Bearer ${this.getToken()}`
    }
  };
  return this.http.put(`http://localhost:4600/api/user/${id}`, data, headers);
}
getUserId(): string | null {
  return localStorage.getItem('userId');

}
}
