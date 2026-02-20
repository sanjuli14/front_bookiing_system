import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Reservation } from '../../../core/models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html'
})
export class ReservationFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dataService = inject(MockDataService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public location = inject(Location);
  private cdr = inject(ChangeDetectorRef);
  
  form!: FormGroup;
  isEditMode = false;
  reservationId: number | null = null;
  loading = false;
  saving = false;

  ngOnInit(): void {
    this.initForm();
    
    // Check if edit mode
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.reservationId = +id;
        this.loadReservationData(this.reservationId);
      }
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      booking_code: ['', [Validators.required]],
      agency: ['BOOKING.COM', [Validators.required]],
      clients_names: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      hotel: ['', [Validators.required]],
      hotel_confirmation: [''],
      date_from: ['', [Validators.required]],
      date_to: ['', [Validators.required]],
      meal_plan: ['ALL INCLUSIVE'],
      sale_price: [0, [Validators.required, Validators.min(0)]],
      touch_cost: [0, [Validators.required, Validators.min(0)]],
      status: ['OK', [Validators.required]],
      remarks: ['']
    });
  }

  private loadReservationData(id: number): void {
    this.loading = true;
    this.dataService.getReservation(id).subscribe({
      next: (res) => {
        if (res) {
          this.form.patchValue(res);
        } else {
          // Add basic toast error handling mechanism
          console.error('Reservation not found');
          this.router.navigate(['/admin/reservations']);
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    const formValue = this.form.value;

    if (this.isEditMode && this.reservationId) {
      // Simulate Update
      setTimeout(() => {
        this.saving = false;
        this.router.navigate(['/admin/reservations']);
      }, 800);
    } else {
      // Create new
      this.dataService.createReservation(formValue).subscribe({
        next: () => {
          this.saving = false;
          this.router.navigate(['/admin/reservations']);
        },
        error: () => this.saving = false
      });
    }
  }
}
