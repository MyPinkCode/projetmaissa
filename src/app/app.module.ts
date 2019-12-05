import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccComponent } from './acc/acc.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LogoComponent } from './logo/logo.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LoginComponent } from './login/login.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { MenuComponent } from './menu/menu.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccComponent,
    AccueilComponent,
    LogoComponent,
    PresentationComponent,
    LoginComponent,
    AddProduitComponent,
    MenuComponent,
    ModifierComponent,
    SupprimerComponent
  ],
  imports: [
    FormsModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
