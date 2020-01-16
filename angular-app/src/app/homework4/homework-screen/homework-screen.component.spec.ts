import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkScreenComponent } from './homework-screen.component';

describe('HomeworkScreenComponent', () => {
  let component: HomeworkScreenComponent;
  let fixture: ComponentFixture<HomeworkScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
