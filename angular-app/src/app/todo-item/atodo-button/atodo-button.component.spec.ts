import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATodoButtonComponent } from './atodo-button.component';

describe('ATodoButtonComponent', () => {
  let component: ATodoButtonComponent;
  let fixture: ComponentFixture<ATodoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATodoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATodoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
