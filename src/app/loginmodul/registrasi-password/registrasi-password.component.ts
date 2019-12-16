import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private readonly dataService: DataLoadersService,
              private router: Router) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

  cekIsianPengguna() {
    const stringUsername = this.registrasiData.username;
    const stringPassword = this.registrasiData.password;
    const stringPasswordKonfirm = this.registrasiData.passwordKonfirm;
    const isValidUsername = this.dataService.cekStringDataCatatan(stringUsername);
    const isValidPassword = this.dataService.cekStringDataCatatan(stringPassword);

    if (stringUsername && stringUsername.length > 3) {
      if (stringPassword && stringPasswordKonfirm
        && stringPassword.length > 3 && stringPasswordKonfirm.length > 3) {
        if (stringPassword === stringPasswordKonfirm) {
          if (isValidUsername && isValidPassword) {
            this.simpanIsianPengguna();
          } else {
            this.showDialogPeringatanGagal('Silahkan perbaiki karakter nama pengguna dan kata sandi dengan benar');
          }
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
          this.showDialogKonfirmasiSuksesRegistrasi('Registrasi akun catatan berhasil');
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
    this.router.navigate(['/masuk-login'], {replaceUrl: true});
  }

  showDialogKonfirmasiSuksesRegistrasi(stringPesan: string) {
    Swal.fire({
      title: 'Berhasil...',
      text: stringPesan,
      icon: 'success',
      confirmButtonText: 'Setuju',
      timer: 2000,
      allowOutsideClick: false,
      onClose: () => {
        this.navigasiBalikLogin();
      },
      customClass: {
        confirmButton: 'is-info',
      }
    }).then((result) => {
      if (result.value) {
        this.navigasiBalikLogin();
      }
    });
  }

  showDialogPeringatanGagal(stringPesan: string = '') {
    Swal.fire({
      icon: 'error',
      title: 'Gagal...',
      text: stringPesan,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor: '#f14668',
      confirmButtonText: 'Setuju',
      allowOutsideClick: false,
      customClass: {
        cancelButton: 'buttoncancel-style',
      }
    });
  }
}
