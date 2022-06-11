import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlystatisticsComponent } from './monthlystatistics.component';

describe('MonthlystatisticsComponent', () => {
  let component: MonthlystatisticsComponent;
  let fixture: ComponentFixture<MonthlystatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlystatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
