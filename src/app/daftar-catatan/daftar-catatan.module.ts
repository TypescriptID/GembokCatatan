import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaftarCatatanRoutingModule } from './daftar-catatan-routing.module';
import { CatatanRahasiaListComponent } from './catatan-rahasia-list/catatan-rahasia-list.component';
import { BuatCatatanComponent } from './buat-catatan/buat-catatan.component';


@NgModule({
  declarations: [CatatanRahasiaListComponent, BuatCatatanComponent],
  imports: [
    CommonModule,
    DaftarCatatanRoutingModule
  ]
})
export class DaftarCatatanModule { }
