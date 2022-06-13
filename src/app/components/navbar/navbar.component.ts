import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shared/model/account.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
  haveAccount(): boolean {
    return false
  }
}
