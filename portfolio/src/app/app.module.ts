import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavBarComponent } from './pages/home/fragments/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/home/fragments/footer/footer.component';
import { MainComponent } from './pages/home/fragments/main/main.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { PresentationComponent } from './pages/home/components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    ButtonComponent,
    LogoComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
