import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*librairie */
import { FlexLayoutModule } from '@angular/flex-layout';
/*module*/
import { MaterialModule } from '../module/material.module';
/*services*/
import { AuthentificationService } from './_services/authentification/authentification.service';
/*components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { SignupComponent } from './components/authentification/signup/signup.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { DemoflexComponent } from './components/demo/demoflex/demoflex.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    DemoflexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
