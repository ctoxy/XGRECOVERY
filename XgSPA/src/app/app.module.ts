import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*librairie */
import { FlexLayoutModule } from '@angular/flex-layout';
/*module*/
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './module/material.module';
/*services*/
import { AuthentificationService } from './_services/authentification/authentification.service';
import { CarteService } from './_services/carte/carte.service';
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
import { ValueComponent } from './components/value/value.component';
import { MainDashComponent } from './components/tableau/main-dash/main-dash.component';
import { CarteComponent } from './components/tableau/carte/carte.component';
import { ValueTableComponent } from './components/tableau/value-table/value-table.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { RecipesComponent } from './components/cookbook/recipes/recipes.component';
import { RecipesDetailComponent } from './components/cookbook/recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './components/cookbook/recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/cookbook/recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/cookbook/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/cookbook/shopping-list/shopping-edit/shopping-edit.component';


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
    NewTrainingComponent,
    StopTrainingComponent,
    ValueComponent,
    MainDashComponent,
    CarteComponent,
    ValueTableComponent,
    CookbookComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [AuthentificationService, CarteService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
