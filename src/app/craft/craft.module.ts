import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CraftRoutingModule } from './craft-routing.module';
import { CraftListComponent } from './craft-list/craft-list.component';
import { CraftDetailComponent } from './craft-detail/craft-detail.component';



@NgModule({
  declarations: [CraftListComponent, CraftDetailComponent],
  imports: [
    CommonModule,
    CraftRoutingModule
  ]
})
export class CraftModule { }
