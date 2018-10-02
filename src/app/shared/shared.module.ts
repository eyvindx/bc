import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
declarations: [
  HeaderComponent,
  SidebarComponent
],
exports: [
  HeaderComponent,
  SidebarComponent
]
})

export class SharedModule {}
