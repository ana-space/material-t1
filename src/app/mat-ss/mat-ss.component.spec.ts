import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSsComponent } from './mat-ss.component';

describe('MatSsComponent', () => {
  let component: MatSsComponent;
  let fixture: ComponentFixture<MatSsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
