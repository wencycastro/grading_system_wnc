import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegistrationComponent } from './registration/registration.component';
import { LayoutModule } from './layout/layout.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ScreenComponent } from './components/screen/screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { RegistrationModule } from './registration/registration.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { TeachersModule } from './layout/teachers/teachers.module';
import { StudentsModule } from './layout/students/students.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    DashboardModule,
    TeachersModule,
    StudentsModule,
    LayoutModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
