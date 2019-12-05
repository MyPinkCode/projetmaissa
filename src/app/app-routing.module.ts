import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { LogoComponent } from './logo/logo.component';
import { SupprimerComponent } from './supprimer/supprimer.component';


const routes: Routes = [
  {path:'presentation/:admin',component:PresentationComponent},
{path:'login',component:LoginComponent},
{path:'accueil',component:AccueilComponent},
{path:'modifier',component:ModifierComponent},
{path:'add-produit',component:AddProduitComponent},
{path:'supprimer',component:SupprimerComponent},
{path:'',redirectTo:"menu",pathMatch:'full'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
