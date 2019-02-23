import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import {VehicleFormComponent} from './vehicle-form/vehicle-form.component';

const routes: Routes = [
  {path: '', component: VehicleListComponent },
  {path: 'new', component: VehicleFormComponent },
  {path: ':id/edit', component: VehicleFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
