import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  year: string = '';

  @Output() yearFilterEvent = new EventEmitter<string>();

  filterLaunchesByYear() {
    this.yearFilterEvent.emit(this.year);
  }
}
