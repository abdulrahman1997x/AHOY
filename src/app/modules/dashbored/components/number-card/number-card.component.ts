import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss'],
})
export class NumberCardComponent implements OnInit, OnChanges {
  @Input() data;
  @Input() statistics;
  @Input() loading;

  number: number;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.number = _.get(this.statistics, this.data.prop);
    this.loading = this.loading;
  }
}
