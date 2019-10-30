import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-registrasi-password',
  templateUrl: './registrasi-password.component.html',
  styleUrls: ['./registrasi-password.component.scss']
})
export class RegistrasiPasswordComponent implements OnInit, OnDestroy {

  registrasiData = {
    username: '',
    password: '',
    passwordKonfirm: ''
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  cekIsianPengguna() {
    const stringUsername = this.registrasiData.username;
    const stringPassword = this.registrasiData.password;
    const stringPasswordKonfirm = this.registrasiData.passwordKonfirm;

    if (stringUsername && stringUsername.length > 3) {
      if (stringPassword && stringPasswordKonfirm) {
        if (stringPassword === stringPasswordKonfirm) {
          this.simpanIsianPengguna();
        } else {
          this.showDialogPeringatanGagal('Kata sandi tidak sama, harap diperbaiki');
        }
      } else {
        this.showDialogPeringatanGagal('Silahkan isi kata sandi dengan benar');
      }
    } else {
      this.showDialogPeringatanGagal('Silahkan isi nama pengguna dengan benar');
    }
  }

  simpanIsianPengguna() {
    // ubah data isian ke dalam bentuk password hash
    // simpan ke local cookies
    // navigasi ke halaman login pengguna
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
