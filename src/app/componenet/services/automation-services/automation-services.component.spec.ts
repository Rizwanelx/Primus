import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationServicesComponent } from './automation-services.component';

describe('AutomationServicesComponent', () => {
  let component: AutomationServicesComponent;
  let fixture: ComponentFixture<AutomationServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
