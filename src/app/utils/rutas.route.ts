import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const app_routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {},
            {},

        ]
    }
];

export const APP_ROUTES = RouterModule.forChild(app_routes);