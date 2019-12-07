import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatatanRahasiaListComponent } from './catatan-rahasia-list/catatan-rahasia-list.component';
import { BuatCatatanComponent } from './buat-catatan/buat-catatan.component';
import { DetailCatatanComponent } from './detail-catatan/detail-catatan.component';


const routes: Routes = [
  {
    path: '',
    component: CatatanRahasiaListComponent
  },
  {
    path: 'buat-catatan',
    component: BuatCatatanComponent,
  },
  {
    path: 'detail-catatan',
    component: DetailCatatanComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaftarCatatanRoutingModule { }
