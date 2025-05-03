import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from './../../../../services/register.service';

@Component({
  selector: 'app-auth-signin',
  standalone: false,
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent {

  constructor(
    private RegisterService: RegisterService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Pour afficher les erreurs
      return;
    }

    console.log("Login Form", this.loginForm.value);

    this.RegisterService.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);

        this.snackBar.open('✅ Connexion réussie !', 'Fermer', { duration: 3000 });

        this.router.navigate(['/profile']); // Change selon ton app
      },
      (err) => {
        this.snackBar.open('❌ Identifiants incorrects.', 'Fermer', { duration: 3000 });
        console.error(err);
      }
    );
  }
}
