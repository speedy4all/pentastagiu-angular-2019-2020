import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserV3Component } from './user-v3.component';

describe('UserV3Component', () => {
  let component: UserV3Component;
  let fixture: ComponentFixture<UserV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
