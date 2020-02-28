import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDisplayFlexComponent } from './table-display-flex.component';

describe('TableDisplayFlexComponent', () => {
  let component: TableDisplayFlexComponent;
  let fixture: ComponentFixture<TableDisplayFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDisplayFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDisplayFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
