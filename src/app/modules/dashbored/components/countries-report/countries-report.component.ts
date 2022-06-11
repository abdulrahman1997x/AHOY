import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-countries-report',
  templateUrl: './countries-report.component.html',
  styleUrls: ['./countries-report.component.scss'],
})
export class CountriesReportComponent implements OnInit, OnChanges {
  @Input() countries;
  searchText: string;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.countries = this.countries;
  }
}
