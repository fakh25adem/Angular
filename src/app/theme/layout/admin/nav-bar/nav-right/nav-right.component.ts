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

  // constructor
  constructor(private registerService: RegisterService) {
    const config = inject(NgbDropdownConfig);
    config.placement = 'bottom-right';
  }
  ngOnInit(): void {
    this.user = this.registerService.getUser(); // ← récupération à l'initialisation
  }
}
