import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';

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

  constructor(private readonly dataService: DataLoadersService) { }

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
    this.dataService.savePasswordIsianPengguna(this.registrasiData.username, this.registrasiData.password)
      .then((result: boolean) => {
        // sukses menyimpan data kata sandi, navigasi ke halaman login kembali
        if (result === true) {
          this.showDialogKonfirmasiSuksesRegistrasi();
        } else {
          this.showDialogPeringatanGagal('Gagal menyimpan data kata sandi');
        }
      })
      .catch((err) => {
        console.warn(err);
        this.showDialogPeringatanGagal('Gagal menyimpan data kata sandi');
      });
  }

  navigasiKePasswordGenerator() {

  }

  navigasiBalikLogin() {

  }

  showDialogKonfirmasiSuksesRegistrasi() {

  }

  showDialogPeringatanGagal(stringPesan: string = '') {

  }
}