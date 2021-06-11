import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IA_CORE_ROUTES } from './ia-core.routes';

import { IaCoreShellComponent } from './components/shell/ia-core-shell.component';
import { IaCoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';

const routes: Routes = [
  {
    path: IA_CORE_ROUTES.EMPTY,
    component: IaCoreShellComponent,
    children: [
      {
        path: IA_CORE_ROUTES.EMPTY
      },
      {
        path: IA_CORE_ROUTES.MOCK,
        component: IaCoreMockTripListContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaCoreRoutingModule { }