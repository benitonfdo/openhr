import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmainpaneComponent } from './ohmainpane.component';

describe('OhmainpaneComponent', () => {
  let component: OhmainpaneComponent;
  let fixture: ComponentFixture<OhmainpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhmainpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmainpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
