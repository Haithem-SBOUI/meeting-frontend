import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./feature/user/welcome/welcome.component";
import {Test1Component} from "./shared/test1/test1.component";
import {Test2Component} from "./shared/test2/test2.component";

const routes: Routes = [
  { path: 'test2', component: Test1Component },
  { path: 'admin',
    loadChildren: () => import('./feature/admin/admin-routing.module')
      .then(m => m.AdminRoutingModule) },

  { path: 'user',
    loadChildren: () => import('./feature/user/user-routing.module')
      .then(m => m.UserRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
