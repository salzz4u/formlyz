import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Option2Component} from './option2/option2.component';
import {Option1Component} from './option1/option1.component';

const routes: Routes = [
  {
    path: 'one',
    component: Option1Component
  },
  {
    path: 'two',
    component: Option2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
