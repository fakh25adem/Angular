import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileForm!: FormGroup;
  userId: string = '';
  private apiUrl = 'http://localhost:4600/api/users';

  constructor(
    private RegisterService: RegisterService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.userId = this.RegisterService.getUserId() || '';
        console.log('User ID:', this.userId);
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload);   
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Payload:', payload);
  
      this.userId = payload.id; // <== Fix ici
      console.log('User ID:', this.userId);
  
      this.RegisterService.getUserById(this.userId).subscribe(user => {
        this.profileForm = this.fb.group({
          nom: [user?.nom || ''],
          prenom: [user?.prenom || ''],
          email: [user?.email || ''],
          age: [user?.age || null],
          sexe: [user?.sexe || '']
        });
      });
    } else {
      console.error('No token found');
      this.router.navigate(['/auth/signin']);
    }
  
  

    // if (!userId) {
    //   this.router.navigate(['/auth/signin']);
    //   return;
    // }
    // this.userId = userId;

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.RegisterService.getToken()
    // });

    // this.http.get<any>(`${this.apiUrl}/One/${this.userId}`, { headers }).subscribe(user => {
    //   this.profileForm = this.fb.group({
    //     nom: [user.nom],
    //     prenom: [user.prenom],
    //     email: [user.email],
    //     age: [user.age],
    //     sexe: [user.sexe]
    //   });
    // });
  }

  onSubmit() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.RegisterService.getToken()
    });

    this.http.put(`${this.apiUrl}/${this.userId}`, this.profileForm.value, { headers }).subscribe(() => {
      alert('Profil mis à jour !');
    });
  }
}
