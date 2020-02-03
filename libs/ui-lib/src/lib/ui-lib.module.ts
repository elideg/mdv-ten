import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './../../../../apps/dashboard/src/app/routing.module';
import { MaterialModule } from '@mdv-ten/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildcarComponent } from './wildcar/wildcar.component';

@NgModule({
  imports: [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RoutingModule
],
  declarations: [ToolbarComponent, LoginComponent, WildcarComponent],
  exports: [ToolbarComponent, LoginComponent]
})
export class UiLibModule {}
