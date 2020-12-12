import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CraftListComponent } from './craft-list/craft-list.component';
import { CraftDetailComponent } from './craft-detail/craft-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CraftListComponent,
  },
  {
    path: ':id',
    component: CraftDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraftRoutingModule { }
