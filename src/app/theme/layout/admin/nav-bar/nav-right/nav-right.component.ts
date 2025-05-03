// angular import
import { Component, inject, OnInit  } from '@angular/core';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RegisterService } from '../../../../../services/register.service';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  user: any = null; // ← l'utilisateur connecté
  Nom: string;
  Prenom: string;
  // constructor
  constructor(private registerService: RegisterService) {
    const config = inject(NgbDropdownConfig);
    config.placement = 'bottom-right';
  }
  ngOnInit(): void {
   
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Payload:', payload);
  
      this.registerService.getUserById(payload.id).subscribe(user => {
          this.Nom = user?.nom || '',
          this.Prenom = user?.prenom || ''
          
      });
    } else {
      console.error('No token found');
    
    }
  }
}
