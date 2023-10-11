import { TestBed } from '@angular/core/testing';

import { patient } from './patient.service';

describe('PatientService', () => {
  let service: patient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(patient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
