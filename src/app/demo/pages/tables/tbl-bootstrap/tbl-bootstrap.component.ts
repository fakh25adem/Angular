import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
@Component({
  selector: 'app-tbl-bootstrap',
  standalone: false,
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss']
})
export default class TblBootstrapComponent  {
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
  const profId = '67ea5e7e813ce64f6d0281c9'; // à remplacer dynamiquement

  this.appointmentService.getAppointmentsCalendarForProf(profId).subscribe(events => {
    this.calendarOptions.events = events;
  });
}}
