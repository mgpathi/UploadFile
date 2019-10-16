import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenulistComponent } from './menulist/menulist.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DownloadsComponent } from './downloads/downloads.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenulistComponent,
    UploadComponent,
    AboutComponent,
    LoginComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
