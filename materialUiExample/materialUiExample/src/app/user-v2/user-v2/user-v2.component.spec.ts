import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserV2Component } from './user-v2.component';

describe('UserV2Component', () => {
  let component: UserV2Component;
  let fixture: ComponentFixture<UserV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
