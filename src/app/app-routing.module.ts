import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";

const routes: Routes = [
  { path: 'user',
    loadChildren: () => import('./feature/user/user-routing.module')
      .then(m => m.UserRoutingModule) },
  { path: 'nav', component: NavBarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
