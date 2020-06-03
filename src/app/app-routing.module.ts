import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallerTrainComponent } from './installer-train/installer-train.component';
import { ServiceFiddlerComponent } from './service-fiddler/service-fiddler.component';


const routes: Routes = [
  { path: 'installer', component: InstallerTrainComponent },
  { path: 'fiddler', component: ServiceFiddlerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
