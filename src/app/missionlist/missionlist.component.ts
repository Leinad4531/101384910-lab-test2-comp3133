import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../spacex.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Mission[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches() {
    this.spaceXService.getAllLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}
