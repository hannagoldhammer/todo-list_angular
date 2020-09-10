import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatodoComponent } from './datatodo.component';

describe('DatatodoComponent', () => {
  let component: DatatodoComponent;
  let fixture: ComponentFixture<DatatodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
