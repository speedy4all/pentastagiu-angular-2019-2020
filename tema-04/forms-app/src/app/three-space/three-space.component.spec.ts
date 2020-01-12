import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSpaceComponent } from './three-space.component';

describe('ThreeSpaceComponent', () => {
  let component: ThreeSpaceComponent;
  let fixture: ComponentFixture<ThreeSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
