import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenulistComponent } from './menulist/menulist.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { SignupComponent } from './signup/signup.component';
import { AdminModule } from './admin/admin.module';
import { DealerComponent } from './dealer/dealer.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { StockReleaseComponent } from './stock-release/stock-release.component';
import { AuthGuard } from './guards/auth.guard';
import { SaleregisterComponent } from './saleregister/saleregister.component';
import { PendingstockComponent } from './pendingstock/pendingstock.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenulistComponent,
    UploadComponent,
    AboutComponent,
    LoginComponent,
    DownloadsComponent,
    SignupComponent,
    DealerComponent,
    DealerDashboardComponent,
    StockReleaseComponent,
    SaleregisterComponent,
    PendingstockComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    FormsModule
  ],
  providers: [UploadService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
