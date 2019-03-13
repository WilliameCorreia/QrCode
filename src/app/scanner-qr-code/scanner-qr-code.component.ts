import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-scanner-qr-code',
  templateUrl: './scanner-qr-code.component.html',
  styleUrls: ['./scanner-qr-code.component.css']
})
export class ScannerQrCodeComponent implements OnInit {

  @ViewChild('scanner') scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  constructor() { }

  ngOnInit() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((pem: boolean) => this.hasPermission = pem);
  }

  ativar() {
    console.log(this.availableDevices[0].deviceId);
    this.currentDevice = this.scanner.getDeviceById(this.availableDevices[0].deviceId);
  }

  handleQrCodeResult(resultString: string){
    console.log(resultString);
    this.qrResultString = resultString;
  }

}
