import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReservationComponent } from './ajouter-reservation.component';

describe('AjouterReservationComponent', () => {
  let component: AjouterReservationComponent;
  let fixture: ComponentFixture<AjouterReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterReservationComponent]
    });
    fixture = TestBed.createComponent(AjouterReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
