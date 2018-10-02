import { NgModule } from '@angular/core';
import { ConfigurationPageComponent } from './configuration-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        ConfigurationPageComponent
    ],
    exports: [

    ],
    imports: [
        SharedModule,
    ]
})

export class ConfigurationModule {}
