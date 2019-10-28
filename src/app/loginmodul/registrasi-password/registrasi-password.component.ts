import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-registrasi-password',
  templateUrl: './registrasi-password.component.html',
  styleUrls: ['./registrasi-password.component.scss']
})
export class RegistrasiPasswordComponent implements OnInit, OnDestroy {

  registrasiData = {
    username: '',
    usernameKonfirm: '',
    password: '',
    passwordKonfirm: ''
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  getIsianPengguna() {

  }

  cekIsianPengguna() {

  }

  simpanIsianPengguna() {

  }

  navigasiKePasswordGenerator() {

  }

  navigasiBalikLogin() {

  }

  showDialogKonfirmasiSukses() {

  }

  showDialogPeringatanGagal(stringPesan: string = '') {

  }
}
