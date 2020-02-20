import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*librairie */
import { FlexLayoutModule } from '@angular/flex-layout';
/*module*/
import { MaterialModule } from './module/material.module';
/*services*/
import { AuthentificationService } from './_services/authentification/authentification.service';
/*components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { SignupComponent } from './components/authentification/signup/signup.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { DemoflexComponent } from './components/demo/demoflex/demoflex.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { TrainingComponent } from './components/training/training/training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { PastTrainingsComponent } from './components/training/past-trainings/past-trainings.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { StopTrainingComponent } from './components/training/current-training/stop-training.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    DemoflexComponent,
    HeaderComponent,
    SidenavListComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PastTrainingsComponent,
    NewTrainingComponent
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
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
