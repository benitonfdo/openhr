import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmenuComponent } from './ohmenu.component';

describe('OhmenuComponent', () => {
  let component: OhmenuComponent;
  let fixture: ComponentFixture<OhmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
