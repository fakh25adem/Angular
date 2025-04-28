import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './../../../../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  standalone: false,
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent {

  constructor(private registerService: RegisterService,
    private router: Router,
    private snackBar: MatSnackBar) {

  }



  userForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    profession: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    professional: new FormControl(false), // Champ pour savoir si la personne est professionnelle

  })
  // Surveillance des changements de rôle
  ngOnInit(): void {
    // Surveillance des changements de rôle
    this.userForm.get('role')?.valueChanges.subscribe(selectedRole => {
      this.handleRoleChange(selectedRole);
    });
  }

  handleRoleChange(role: string) {
    console.log('Rôle sélectionné :', role);

    if (role == 'professional') {
      console.log('Mode Professionnel activé');
      this.userForm.get('professional')?.setValue(true);
    } else {
      console.log('Mode Client ou autre');
      this.userForm.get('professional')?.setValue(false);
    }
  }
  onRegister() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); // Pour forcer l'affichage des erreurs
      return; // Ne pas envoyer au service
    }
    console.log("user Form", this.userForm.value)
    this.registerService.register(this.userForm.value).subscribe(
      (res) => {
        const confirmed = window.confirm("✅ Utilisateur ajouté avec succès ! Voulez-vous vous connecter maintenant ?");
        if (confirmed) {
          this.router.navigate(['/auth/signin']);
        }
      },
      (err) => {
        alert("❌ Une erreur est survenue lors de l'inscription.");
        console.error(err);
      }
    )
  }
}
