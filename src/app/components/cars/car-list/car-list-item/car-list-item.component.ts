import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../../shared/car.model';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css'],
})
export class CarListItemComponent implements OnInit {
  constructor() { }

  @Input() car!: Car;
  @Input() index!: number;

  ngOnInit(): void { }
}
