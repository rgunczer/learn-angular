import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { ParentBeeComponent } from './parent-bee/parent-bee.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
  {
    path: 'bee',
    component: ParentBeeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
