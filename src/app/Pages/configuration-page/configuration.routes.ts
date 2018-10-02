import { RouterModule, Routes} from '@angular/router';
import { ConfigurationPageComponent } from './configuration-page.component';

const configuration_routes: Routes =  [
    {
        path: '',
        component: ConfigurationPageComponent,
        children: [
            {},
            {},

        ]
    }
]

export const CONFIGURATION_ROUTES = RouterModule.forChild(configuration_routes);