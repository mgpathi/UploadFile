import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenulistComponent } from '../menulist/menulist.component';
import { UploadComponent } from '../upload/upload.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { DownloadsComponent } from '../downloads/downloads.component';

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