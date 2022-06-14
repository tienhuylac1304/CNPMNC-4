import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/shared/model/driver.model';

@Component({
  selector: 'app-driver-list-item',
  templateUrl: './driver-list-item.component.html',
  styleUrls: ['./driver-list-item.component.css'],
})
export class DriverListItemComponent implements OnInit {
  constructor() { }
  @Input() driver!: Driver;
  @Input() index!: number;
  ngOnInit(): void {
  }
}
