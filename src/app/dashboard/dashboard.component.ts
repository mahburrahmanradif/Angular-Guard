import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title?: string;
  metaDescription?: string;
  showInMenu?: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Accessing route data using ActivatedRoute
    this.title = this.route.snapshot.data['title'];
    this.metaDescription = this.route.snapshot.data['metaDescription'];
    this.showInMenu = this.route.snapshot.data['showInMenu'];

  }
}
