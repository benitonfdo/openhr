import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhsidenavComponent } from './ohsidenav.component';

describe('OhsidenavComponent', () => {
  let component: OhsidenavComponent;
  let fixture: ComponentFixture<OhsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
