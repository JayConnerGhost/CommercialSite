import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OpensourceComponent } from './opensource/opensource.component';
import { AgileComponent } from './agile/agile.component';
import { WinformsComponent } from './winforms/winforms.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SiteExplanationComponent } from './welcome/site-explanation/site-explanation.component';
import { WelcomeMessageComponent } from './welcome/welcome-message/welcome-message.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OpensourceComponent,
    AgileComponent,
    WinformsComponent,
    CvComponent,
    HeaderComponent,
    SidenavListComponent,
     SiteExplanationComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
