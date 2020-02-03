import { AuthGuard } from '../../../../libs/core-data/src/lib/auth/auth-guard';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { WildcarComponent } from './../../../../libs/ui-lib/src/lib/wildcar/wildcar.component';
import { LoginComponent } from './../../../../libs/ui-lib/src/lib/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  { path: 'projects', canActivate: [AuthGuard], children: [
    { path: '', component: ProjectComponent },
    { path: ':id', component: ProjectItemComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
