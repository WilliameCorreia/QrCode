import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';



import { AppComponent } from './app.component';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule} from '@zxing/ngx-scanner';
import { ScannerQrCodeComponent } from './scanner-qr-code/scanner-qr-code.component';

@NgModule({
  declarations: [
      AppComponent,
      ScannerQrCodeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      NgQRCodeReaderModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      ZXingScannerModule,
      NgbModule,
      MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }