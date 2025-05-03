import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-basic-reservation',
  standalone: false,
  templateUrl: './basic-reservation.component.html',
  styleUrls: ['./basic-reservation.component.scss']
})
export class BasicReservationComponent implements OnInit {

  rechercheForm = new FormGroup({
    professionalId: new FormControl(''),
    dateOnly: new FormControl(new Date().toISOString().slice(0, 10))
 

  });
  reservationForm = new FormGroup({
    
    patientId: new FormControl(''),
    startHour: new FormControl(''),
    endHour: new FormControl('')

  });

  professionals: any[] = [];
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.appointmentService.getProfessionals().subscribe(data => {
      this.professionals = data;
    });
  }
  rechercheEffectuee = false;


  rechercher() {
    const professionalId = this.rechercheForm.get('professionalId')?.value;
    const dateOnly = this.rechercheForm.get('dateOnly')?.value;

    if (!dateOnly || !professionalId) return;

    this.appointmentService.rechercheRendezVous(dateOnly, professionalId).subscribe(
      res => {
        console.log(res);
        this.appointments = res.appointment;
        this.rechercheEffectuee = true;

      },
      err => {
        console.error(err);
        this.rechercheEffectuee = true;

      }
    );
  }
  ajouterRendezVous() {
    const professionalId = this.rechercheForm.get('professionalId')?.value;
    const dateOnly = this.rechercheForm.get('dateOnly')?.value;
    const patientId = this.reservationForm.get('patientId')?.value;
    const startHour = this.reservationForm.get('startHour')?.value;
    const endHour = this.reservationForm.get('endHour')?.value;

    const newAppointment = {
      professional: professionalId,
      dateOnly,
      client:patientId,
      heureDebut:startHour,
      heureFin: endHour
    };

    this.appointmentService.ajouterRendezVous(newAppointment).subscribe(
      res => {
        this.rechercher(); // rafraîchir la liste
        console.log("res",res)
      },
      err => {
        console.error(err);
      }
    );
  }
}
