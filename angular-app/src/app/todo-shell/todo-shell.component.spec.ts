import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoShellComponent } from './todo-shell.component';

describe('TodoShellComponent', () => {
  let component: TodoShellComponent;
  let fixture: ComponentFixture<TodoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
