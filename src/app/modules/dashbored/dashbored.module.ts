import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DashboredRoutingModule } from './dashbored-routing.module';
import { DashboredComponent } from './dashbored.component';
import { CovidInterceptor } from 'src/app/interceptor/covid.interceptor';
import { HeaderComponent } from './components/header/header.component';

// ANGULAR MATRIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgSelectModule } from '@ng-select/ng-select';

// Components
import { NumberCardComponent } from './components/number-card/number-card.component';
import { MapComponent } from './components/map/map.component';
import { CountriesReportComponent } from './components/countries-report/countries-report.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { MonthlyStatisticsComponent } from './components/monthlystatistics/monthlystatistics.component';
import { NgChartsModule } from 'ng2-charts';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    DashboredComponent,
    HeaderComponent,
    NumberCardComponent,
    MapComponent,
    CountriesReportComponent,
    FilterPipe,
    MonthlyStatisticsComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    DashboredRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,

    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CovidInterceptor,
      multi: true,
    },
  ],
})
export class DashboredModule {}
