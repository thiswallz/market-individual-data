import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMarketComponent } from './select-market.component';

describe('SelectMarketComponent', () => {
  let component: SelectMarketComponent;
  let fixture: ComponentFixture<SelectMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
