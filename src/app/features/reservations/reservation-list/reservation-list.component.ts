import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Reservation } from '../../../core/models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reservation-list.component.html'
})
export class ReservationListComponent implements OnInit {
  private dataService = inject(MockDataService);
  private cdr = inject(ChangeDetectorRef);
  
  reservations: Reservation[] = [];
  filteredReservations: Reservation[] = [];
  loading = true;
  
  // Filter states
  currentStatusFilter = 'ALL';
  searchQuery = '';

  ngOnInit(): void {
    this.dataService.getReservations().subscribe((data: Reservation[]) => {
      this.reservations = data;
      this.filteredReservations = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  filterByStatus(status: string) {
    this.currentStatusFilter = status;
    this.applyFilters();
  }
  
  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
    this.applyFilters();
  }
  
  private applyFilters() {
    this.filteredReservations = this.reservations.filter(res => {
      const matchStatus = this.currentStatusFilter === 'ALL' || res.status === this.currentStatusFilter;
      const matchSearch = this.searchQuery === '' || 
                          res.booking_code.toLowerCase().includes(this.searchQuery) ||
                          res.clients_names.toLowerCase().includes(this.searchQuery) ||
                          res.hotel.toLowerCase().includes(this.searchQuery) ||
                          res.agency.toLowerCase().includes(this.searchQuery);
      return matchStatus && matchSearch;
    });
  }
}
