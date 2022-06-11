import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest } from 'rxjs';
import { IStatistics } from 'src/app/interfaces/stats';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.scss'],
})
export class DashboredComponent implements OnInit {
  currentTime;
  statistics = [];
  countries = [];
  loading = false;
  numberCards = [
    {
      id: 'totalCases',
      title: 'Total Cases',
      prop: 'cases.total',
      icon: 'show_chart',
      class: 'total',
    },
    {
      id: 'newCases',
      title: 'New Cases',
      prop: 'cases.new',
      icon: 'show_chart',
      class: 'new',
    },
    {
      id: 'activeCases',
      title: 'Active Cases',
      prop: 'cases.active',
      icon: 'show_chart',
      class: 'active',
    },
    {
      id: 'totaldeaths',
      title: 'Total Deaths',
      prop: 'deaths.total',
      icon: 'show_chart',
      class: 'deaths',
    },
  ];

  monthlyCharts = [
    {
      title: 'Historical Monthly Covid-19 Cases for',
      prop: 'cases.new',
      chartType: 'line',
      label: 'Covid Daily Cases',
    },
    {
      title: 'Historical Monthly Covid-19 Deaths for',
      prop: 'deaths.new',
      chartType: 'line',
      label: 'Covid Daily Deaths',
    },
  ];

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.loading = true;
    combineLatest([this.getStatistics(), this.getCountries()]).subscribe(
      (res: any) => {
        this.loading = false;
        this.statistics = res[0].response;
        this.countries = res[1].response;
      }
    );
  }

  getCountries() {
    return this.covidService.getStatistics();
  }

  getStatistics() {
    return this.covidService.getStatistics('All');
  }
}
