import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../core/services/mock-data.service';
import { DashboardMetrics } from '../../core/models/reservation.model';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private dataService = inject(MockDataService);
  private cdr = inject(ChangeDetectorRef);
  
  metrics: DashboardMetrics | null = null;
  loading = true;

  // Chart Configurations
  trendChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top' } },
    scales: { y: { beginAtZero: true } },
    elements: { line: { tension: 0.4 } }
  };
  
  trendChartData: any;
  statusChartData: any;

  ngOnInit(): void {
    this.dataService.getDashboardMetrics().subscribe((data: DashboardMetrics) => {
      this.metrics = data;
      this.initCharts(data);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  private initCharts(data: DashboardMetrics) {
    this.trendChartData = {
      labels: data.monthlyTrend.labels,
      datasets: [
        {
          label: 'Revenue ($)',
          data: data.monthlyTrend.revenue,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true
        },
        {
          label: 'Profit ($)',
          data: data.monthlyTrend.profit,
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          fill: true
        }
      ]
    };

    this.statusChartData = {
      labels: data.statusData.labels,
      datasets: [{
        data: data.statusData.data,
        backgroundColor: data.statusData.colors,
        borderWidth: 0
      }]
    };
  }
}
