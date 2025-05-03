import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent  {
    clients: any[] = [];
 
    constructor(private appointmentService: AppointmentService) {}
  
    ngOnInit(): void {
      const token = localStorage.getItem('token');
      const payload = JSON.parse(atob(token.split('.')[1]));
      if(token){
      const profId = payload.id; // à remplacer dynamiquement
      this.appointmentService.getClient(profId).subscribe(res => {
        console.log("ressssssssss",res);
        this.clients= res;
      }); 
    }
  }
   
}
