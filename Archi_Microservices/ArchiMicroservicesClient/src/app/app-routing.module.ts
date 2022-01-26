// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
// @ts-ignore
import {RouterModule, Routes} from "@angular/router";
import {BillComponent} from "./bill/bill.component";

const routes: Routes = [
  { path: 'bill', component: BillComponent }
];

// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
