import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CraftListComponent } from './craft-list/craft-list.component';

const routes: Routes = [
  {
    path: '',
    component: CraftListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraftRoutingModule { }
