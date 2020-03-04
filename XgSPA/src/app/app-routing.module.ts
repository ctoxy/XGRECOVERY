import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SignupComponent } from './components/authentification/signup/signup.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { DemoflexComponent } from './components/demo/demoflex/demoflex.component';
import { TrainingComponent } from './components/training/training/training.component';
import { ValueComponent } from './components/value/value.component';
import { CarteComponent } from './components/tableau/carte/carte.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { ShoppingListComponent } from './components/cookbook/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/cookbook/recipes/recipes.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'demoflex', component: DemoflexComponent },
  { path: 'cookbook', component: CookbookComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'values', component: ValueComponent },
  { path: 'carte', component: CarteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
