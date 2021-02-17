import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crafts',
    pathMatch: 'full',
  },
  {
    path: 'crafts',
    loadChildren: () => import('./craft/craft.module').then(m => m.CraftModule),
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
