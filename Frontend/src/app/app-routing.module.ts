import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { StoreComponent } from './components/store/store.component';
import { MygamesComponent } from './components/mygames/mygames.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mygames',
    component: MygamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/store',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
