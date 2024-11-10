import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, SidenavComponent, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isSidenavVisible = true;

  toggleSidenav() {
    this.isSidenavVisible = !this.isSidenavVisible;
  }
}
