import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CraftRoutingModule } from './craft-routing.module';
import { CraftListComponent } from './craft-list/craft-list.component';



@NgModule({
  declarations: [CraftListComponent],
  imports: [
    CommonModule,
    CraftRoutingModule
  ]
})
export class CraftModule { }
