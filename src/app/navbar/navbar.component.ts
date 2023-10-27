import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  popup: boolean = false;
  togglePopUp(): any {
    this.popup = !this.popup
  }
  menuBar: boolean = false;
  toggleMenu(): any {
    this.menuBar = !this.menuBar
  }
}
