import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { ChartOptions } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-monthlyStatistics',
  templateUrl: './monthlystatistics.component.html',
  styleUrls: ['./monthlystatistics.component.scss'],
})
export class MonthlyStatisticsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input() countries: [];
  @Input() loading = false;
  country: string = 'UAE';
  data = [];
  public lineChartData = {
    datasets: [
      {
        data: [],
        label: 'loading...',
      },
    ],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'day',
      yAxisKey: 'cases.new',
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 28,
        },
        time: {
          displayFormats: { day: 'MM/YY' },
          tooltipFormat: 'DD/MM/YY',
          unit: 'month',
        },
      },
    },
  };
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private covidService: CovidService) {}

  ngOnInit() {
    this.getHistory(this.country);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countries = this.countries;
    this.loading = this.loading;
  }

  getHistory(country) {
    this.covidService.getHistory(this.country).subscribe((res: any) => {
      this.data = res.response;
      this.lineChartData.datasets[0].data = res.response.reverse();
      this.lineChartData.datasets[0].label = 'Covid Daily Cases';
      this.chart?.update();
      this.loading = false;
    });
  }

  updateData(country) {
    this.loading = true;
    this.getHistory(country);
  }
}
