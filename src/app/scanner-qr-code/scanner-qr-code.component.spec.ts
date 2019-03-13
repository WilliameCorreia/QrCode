import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerQrCodeComponent } from './scanner-qr-code.component';

describe('ScannerQrCodeComponent', () => {
  let component: ScannerQrCodeComponent;
  let fixture: ComponentFixture<ScannerQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
