import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhsidepaneComponent } from './ohsidepane.component';

describe('OhsidepaneComponent', () => {
  let component: OhsidepaneComponent;
  let fixture: ComponentFixture<OhsidepaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhsidepaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhsidepaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
