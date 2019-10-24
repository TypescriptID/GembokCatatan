import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatatanRahasiaListComponent } from './catatan-rahasia-list/catatan-rahasia-list.component';
import { BuatCatatanComponent } from './buat-catatan/buat-catatan.component';


const routes: Routes = [
  {
    path: '',
    component: CatatanRahasiaListComponent
  },
  {
    path: 'buat-catatan',
    component: BuatCatatanComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaftarCatatanRoutingModule { }
