import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const app_routes: Routes = [
{path: 'index', component: HomePageComponent},
// {path: '**', component: Page404},
{path: '', redirectTo: '/index', pathMatch: 'full'}
];

export const APP_ROUTES = RouterModule.forRoot(app_routes, {useHash: true});