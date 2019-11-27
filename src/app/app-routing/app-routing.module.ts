import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenulistComponent } from '../menulist/menulist.component';
import { UploadComponent } from '../upload/upload.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { DownloadsComponent } from '../downloads/downloads.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthGuard } from '../guards/auth.guard';
import { DealerComponent } from '../dealer/dealer.component';
import { DealerDashboardComponent } from '../dealer-dashboard/dealer-dashboard.component';
import { StockReleaseComponent } from '../stock-release/stock-release.component';
import { SaleregisterComponent } from '../saleregister/saleregister.component';
import { PendingstockComponent } from '../pendingstock/pendingstock.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'menu',
        component: MenulistComponent,
    },
    {
        path: 'downloads',
        component: DownloadsComponent,
    },
    {
        path: 'upload',
        component: UploadComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'dealer', canActivate: [AuthGuard], component: DealerComponent,
        children: [{
            path: '',
            canActivateChild: [AuthGuard],
            children: [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                { path: 'stock', component: StockReleaseComponent, canActivateChild: [AuthGuard] },
                { path: 'dashboard', component: DealerDashboardComponent },
                { path: 'sales', component: SaleregisterComponent },
                { path: 'pendingstock', component: PendingstockComponent },
            ]
        }]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }