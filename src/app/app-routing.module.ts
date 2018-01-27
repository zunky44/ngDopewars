import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameWindowComponent } from './game-window/game-window.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path: '', redirectTo: '/gamewindow', pathMatch: 'full' },
  {path: 'gamewindow', component: GameWindowComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
