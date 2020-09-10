import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTodoComponent } from './print-todo.component';

describe('PrintTodoComponent', () => {
  let component: PrintTodoComponent;
  let fixture: ComponentFixture<PrintTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
