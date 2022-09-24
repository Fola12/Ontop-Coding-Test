import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactorMgtComponent } from './contactor-mgt.component';

describe('ContactorMgtComponent', () => {
  let component: ContactorMgtComponent;
  let fixture: ComponentFixture<ContactorMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactorMgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactorMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
