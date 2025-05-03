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
  reservationForm: FormGroup;

  professionals: any[] = [];
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    this.reservationForm = new FormGroup({

      patientId: new FormControl(''), // Auto-set from token
      startHour: new FormControl(''),
      endHour: new FormControl('')
    });
    this.reservationForm.get('startHour').valueChanges.subscribe((startHourValue: string) => {
      if (startHourValue) {
        console.log('startHourValue:', startHourValue); // e.g., "14:30"

        // Parse hours and minutes
        const [hours, minutes] = startHourValue.split(':').map(Number);

        if (isNaN(hours) || isNaN(minutes)) {
          console.error('Invalid time format');
          return;
        }

        // Calculate end time (+30 mins)
        let endHours = hours;
        let endMinutes = minutes + 30;

        // Handle minute overflow (e.g., 45 + 30 = 75 → 1h15)
        if (endMinutes >= 60) {
          endHours += Math.floor(endMinutes / 60);
          endMinutes = endMinutes % 60;
        }

        const endHourValue =
          `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;

        console.log('endHourValue:', endHourValue);
        this.reservationForm.get('endHour').setValue(endHourValue, { emitEvent: false });
      }
    });
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));

      this.reservationForm.get('patientId').setValue(payload.id);
    }

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
      client: patientId,
      heureDebut: startHour,
      heureFin: endHour
    };

    this.appointmentService.ajouterRendezVous(newAppointment).subscribe(
      res => {
        this.rechercher(); // rafraîchir la liste
        console.log("res", res)
      },
      err => {
        console.error(err);
      }
    );
  }
}
