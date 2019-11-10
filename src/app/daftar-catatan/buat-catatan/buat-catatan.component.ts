import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-buat-catatan',
  templateUrl: './buat-catatan.component.html',
  styleUrls: ['./buat-catatan.component.scss']
})
export class BuatCatatanComponent implements OnInit {

  public editorText = ClassicEditor;

  configEditor = {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link',
    'bulletedList', 'numberedList', 'blockQuote',
    '|', 'undo', 'redo', '|', 'outdent', 'indent' ],
    placeholder: 'Isi pesan catatan disini'
  };

  catatanItems = {
    judul: '',
    isicatatan: '',
    tanggalcatatan: ''
  };

  constructor() { }

  ngOnInit() {
  }

  cekIsianCatatan() {

  }

  buatCatatan() {

  }
}
