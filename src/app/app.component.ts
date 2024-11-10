import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LayoutComponent } from './core/layout/layout.component';
import { NavComponent } from './core/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'graphics-dashboard';
}
