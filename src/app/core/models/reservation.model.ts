export interface Room {
  id?: number;
  room_type: string;
  pax_ad: number;
  pax_chd: number;
}

export interface Reservation {
  id: number;
  status: 'OK' | 'PENDING' | 'CXX';
  agency: string;
  booking_code: string;
  clients_names: string;
  hotel: string;
  date_from: string; // YYYY-MM-DD
  date_to: string;   // YYYY-MM-DD
  meal_plan: string;
  sale_price: number;
  touch_cost: number;
  profit_percentage?: number;
  valid_rates?: string;
  nationality?: string;
  remarks?: string;
  hotel_confirmation?: string;
  rooms?: Room[];
  created_at?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface DashboardMetrics {
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  avgProfitPercentage: number;
  
  totalReservations: number;
  cancelledReservations: number;
  activeReservationsCount: number;
  cancellationRate: number;
  
  statusData: {
    labels: string[];
    data: number[];
    colors: string[];
  };
  
  hotelData: {
    labels: string[];
    data: number[];
  };
  
  monthlyTrend: {
    labels: string[];
    reservations: number[];
    revenue: number[];
    profit: number[];
  };
}
