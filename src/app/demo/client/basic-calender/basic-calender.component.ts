import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-basic-calender',
  standalone: false,
  templateUrl: './basic-calender.component.html',
  styleUrls: ['./basic-calender.component.scss']
})
export class BasicCalenderComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    locales: [frLocale],
    locale: 'fr',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    allDaySlot: false,
    timeZone: 'local',
    events: []
  };

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    const clientId = '67e93805df508131ff117ae3'; // à remplacer dynamiquement

    this.appointmentService.getAppointmentsCalendarForClient(clientId).subscribe(events => {
      this.calendarOptions.events = events;
    });
  }
}