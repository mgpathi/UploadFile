import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReleaseComponent } from './stock-release.component';

describe('StockReleaseComponent', () => {
  let component: StockReleaseComponent;
  let fixture: ComponentFixture<StockReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
