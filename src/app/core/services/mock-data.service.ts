import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Reservation, DashboardMetrics } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private mockReservations: Reservation[] = [
    {
      id: 1,
      booking_code: 'BKG-1001',
      agency: 'BOOKING.COM',
      hotel: 'GRAND RESORT SPA',
      clients_names: 'JOHN DOE, JANE DOE',
      date_from: '2026-03-01',
      date_to: '2026-03-05',
      meal_plan: 'ALL INCLUSIVE',
      sale_price: 1500.00,
      touch_cost: 1100.00,
      profit_percentage: 36.36,
      status: 'OK',
      nationality: 'USA',
      hotel_confirmation: 'CONF-8821',
      rooms: [
        { room_type: 'DELUXE OCEAN VIEW', pax_ad: 2, pax_chd: 0 }
      ]
    },
    {
      id: 2,
      booking_code: 'EXP-4922',
      agency: 'EXPEDIA',
      hotel: 'CITY CENTER HOTEL',
      clients_names: 'MARIA GARCIA',
      date_from: '2026-03-10',
      date_to: '2026-03-12',
      meal_plan: 'BED & BREAKFAST',
      sale_price: 350.00,
      touch_cost: 280.00,
      profit_percentage: 25.00,
      status: 'PENDING',
      nationality: 'SPAIN',
      rooms: [
        { room_type: 'STANDARD DOUBLE', pax_ad: 1, pax_chd: 0 }
      ]
    },
    {
      id: 3,
      booking_code: 'DIR-9931',
      agency: 'DIRECT',
      hotel: 'MOUNTAIN RETREAT',
      clients_names: 'ROBERT SMITH, EMILY SMITH, TIMMY SMITH',
      date_from: '2026-04-15',
      date_to: '2026-04-20',
      meal_plan: 'HALF BOARD',
      sale_price: 2100.00,
      touch_cost: 1600.00,
      profit_percentage: 31.25,
      status: 'OK',
      nationality: 'UK',
      hotel_confirmation: 'MNT-441',
      rooms: [
        { room_type: 'FAMILY SUITE', pax_ad: 2, pax_chd: 1 }
      ]
    },
    {
      id: 4,
      booking_code: 'AGD-5512',
      agency: 'AGODA',
      hotel: 'GRAND RESORT SPA',
      clients_names: 'LI WEI',
      date_from: '2026-02-25',
      date_to: '2026-02-28',
      meal_plan: 'ROOM ONLY',
      sale_price: 450.00,
      touch_cost: 380.00,
      profit_percentage: 18.42,
      status: 'CXX',
      nationality: 'CHINA',
      remarks: 'Client cancelled due to flight change',
      rooms: [
        { room_type: 'STANDARD SINGLE', pax_ad: 1, pax_chd: 0 }
      ]
    },
    {
      id: 5,
      booking_code: 'BKG-1045',
      agency: 'BOOKING.COM',
      hotel: 'SUNSET BEACH APARTS',
      clients_names: 'ANNA MULLER, FELIX MULLER',
      date_from: '2026-05-01',
      date_to: '2026-05-10',
      meal_plan: 'SELF CATERING',
      sale_price: 1800.00,
      touch_cost: 1400.00,
      profit_percentage: 28.57,
      status: 'OK',
      nationality: 'GERMANY',
      hotel_confirmation: 'SBA-992',
      rooms: [
        { room_type: 'ONE BEDROOM APARTMENT', pax_ad: 2, pax_chd: 0 }
      ]
    }
  ];

  private mockDashboardMetrics: DashboardMetrics = {
    totalRevenue: 6200.00,
    totalCost: 4760.00,
    totalProfit: 1440.00,
    avgProfitPercentage: 27.92,
    totalReservations: 124,
    cancelledReservations: 14,
    activeReservationsCount: 110,
    cancellationRate: 11.29,
    statusData: {
      labels: ['Confirmed (OK)', 'Pending', 'Cancelled'],
      data: [85, 25, 14],
      colors: ['#22c55e', '#facc15', '#ef4444']
    },
    hotelData: {
      labels: ['Grand Resort Spa', 'City Center Hotel', 'Mountain Retreat', 'Sunset Beach Aparts', 'Airport Transit Inn'],
      data: [45, 30, 20, 18, 11]
    },
    monthlyTrend: {
      labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      reservations: [15, 18, 25, 22, 19, 25],
      revenue: [4500, 5200, 8100, 6800, 5900, 8500],
      profit: [1200, 1400, 2200, 1800, 1500, 2400]
    }
  };

  constructor() { }

  // Simulate network delay
  private delayMs = 600;

  getDashboardMetrics(): Observable<DashboardMetrics> {
    return of(this.mockDashboardMetrics).pipe(delay(this.delayMs));
  }

  getReservations(): Observable<Reservation[]> {
    return of(this.mockReservations).pipe(delay(this.delayMs));
  }

  getReservation(id: number): Observable<Reservation | undefined> {
    const res = this.mockReservations.find(r => r.id === id);
    return of(res).pipe(delay(this.delayMs));
  }

  createReservation(reservation: Omit<Reservation, 'id'>): Observable<Reservation> {
    const newReservation = {
      ...reservation,
      id: Math.max(...this.mockReservations.map(r => r.id)) + 1,
      created_at: new Date().toISOString()
    };
    this.mockReservations.push(newReservation);
    return of(newReservation).pipe(delay(this.delayMs));
  }
}
