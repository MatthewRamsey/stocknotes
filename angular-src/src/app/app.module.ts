import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AmChartsModule} from 'amcharts3-angular2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartComponent } from './components/chart/chart.component';
import { PrivatenotesComponent } from './components/privatenotes/privatenotes.component';
import { PublicnotesComponent } from './components/publicnotes/publicnotes.component';
import { NewsComponent } from './components/news/news.component';
import { TwitterComponent } from './components/twitter/twitter.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {StockService} from './services/stock.service';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ChartComponent,
    PrivatenotesComponent,
    PublicnotesComponent,
    NewsComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AmChartsModule
  ],
  providers: [ValidateService, AuthService, StockService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
