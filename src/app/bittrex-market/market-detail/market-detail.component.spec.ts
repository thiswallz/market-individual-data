import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDetailComponent } from './market-detail.component';

describe('MarketDetailComponent', () => {
  let component: MarketDetailComponent;
  let fixture: ComponentFixture<MarketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
