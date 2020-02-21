import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicknamesComponent } from './unicknames.component';

describe('UnicknamesComponent', () => {
  let component: UnicknamesComponent;
  let fixture: ComponentFixture<UnicknamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicknamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicknamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
