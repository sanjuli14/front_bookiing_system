import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Reservation } from '../../../core/models/reservation.model';

@Component({
  selector: 'app-financial-diagnosis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './financial-diagnosis.component.html'
})
export class FinancialDiagnosisComponent implements OnInit {
  private dataService = inject(MockDataService);
  private cdr = inject(ChangeDetectorRef);

  loading = true;
  
  // Metrics
  totalActiveReservations = 0;
  totalRevenue = 0;
  totalCost = 0;
  totalProfit = 0;
  profitMarginPercentage = 0;
  dashboardMargin = 0;

  negativeProfitData: any[] = [];
  marginData: any[] = [];

  ngOnInit(): void {
    this.dataService.getReservations().subscribe((reservations: Reservation[]) => {
      // Filter only OK and PENDING
      const active = reservations.filter(r => r.status === 'OK' || r.status === 'PENDING');
      this.totalActiveReservations = active.length;

      let sumPerc = 0;
      let countPerc = 0;

      active.forEach(res => {
        const sale = res.sale_price || 0;
        const cost = res.touch_cost || 0;
        const storedMargin = res.profit_percentage || 0;

        this.totalRevenue += sale;
        this.totalCost += cost;

        if (storedMargin) {
           sumPerc += storedMargin;
           countPerc++;
        }

        // Negative check
        if (sale < cost) {
          this.negativeProfitData.push({
            reservation: res,
            loss: cost - sale
          });
        }

        // Detailed check
        if (cost > 0) {
          const manualMargin = ((sale - cost) / cost) * 100;
          const diff = manualMargin - storedMargin;
          
          this.marginData.push({
            reservation: res,
            sale_price: sale,
            touch_cost: cost,
            stored_margin: storedMargin,
            manual_margin: manualMargin,
            difference: diff
          });
        }
      });

      this.totalProfit = this.totalRevenue - this.totalCost;
      if (this.totalCost > 0) {
        this.profitMarginPercentage = (this.totalProfit / this.totalCost) * 100;
      }
      
      if (countPerc > 0) {
        this.dashboardMargin = sumPerc / countPerc;
      }

      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
