import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule
}
from  '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  exports:[
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ]

})
export class MaterialModule { }
