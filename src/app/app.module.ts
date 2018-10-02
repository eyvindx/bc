import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// primeng
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

// directives
import { NumberOnlyDirective } from './directives/number.directive';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ConfigurationPageComponent } from './Pages/configuration-page/configuration-page.component';
import { CatalogosComponent } from './Pages/configuration-page/catalogos/catalogos.component';
import { BarraAccionesComponent } from './componentes/barra-acciones/barra-acciones.component';


// rutas

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    HomePageComponent,
    ConfigurationPageComponent,
    CatalogosComponent,
    BarraAccionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
