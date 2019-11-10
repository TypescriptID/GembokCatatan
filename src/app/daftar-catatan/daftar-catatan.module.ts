import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { DaftarCatatanRoutingModule } from './daftar-catatan-routing.module';
import { CatatanRahasiaListComponent } from './catatan-rahasia-list/catatan-rahasia-list.component';
import { BuatCatatanComponent } from './buat-catatan/buat-catatan.component';


@NgModule({
  declarations: [CatatanRahasiaListComponent, BuatCatatanComponent],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    DaftarCatatanRoutingModule
  ]
})
export class DaftarCatatanModule { }
