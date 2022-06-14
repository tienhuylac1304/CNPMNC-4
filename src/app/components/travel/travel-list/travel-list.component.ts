import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/services/travel.service';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  constructor(private travelService: TravelService) {
  }

  isRecycle: boolean = false
  travels: Travel[] = [];
  travelRecycle: Travel[] = [];

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(res => (this.travels = res as Travel[]));
    this.travelService.getTravelFromRecycleBin().subscribe(res => (this.travelRecycle = res as Travel[]));
  }
  handleClickRecycle(): void {
    this.isRecycle = !this.isRecycle
  }
}
