import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import Swal from 'sweetalert2';
import { PasswordCekModel } from 'src/app/models/PasswordCek';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private readonly dataservice: DataLoadersService) { }

  ngOnInit() {
  }

  getIsianPengguna() {
    // ambil data isian pengguna
    const loginUsername = this.loginData.username;
    const passwordLogin = this.loginData.password;
    if (loginUsername && loginUsername.length > 1) {
      if (passwordLogin && passwordLogin.length > 6) {
        this.cekIsianPengguna();
      } else {
        this.showDialogGagal('Masukkan kata sandi dengan benar');
      }
    } else {
      this.showDialogGagal('Masukkan nama pengguna dengan benar');
    }
  }

  cekIsianPengguna() {
    // ambil data pengguna password yang tersimpan di cookies
    // ambil data catatan yang tersimpan di local storage
    // decrypt data catatan dengan password isian pengguna
    // jika catatan bisa dibuka, maka lanjutkan dengan menyimpan password pengguna
    // dan masuk ke dalam daftar catatan

    // cek password
    this.dataservice.cekPasswordIsianPengguna(this.loginData.username, this.loginData.password)
    .then((result: PasswordCekModel) => {
      const isUsernameOk = result.isUsernameOk;
      const isPassOk = result.isPasswordOK;
      if (isUsernameOk && isPassOk) {

      } else {
        this.showDialogGagal('Nama pengguna dan kata sandi anda tidak cocok');
      }
    })
    .catch((err) => {
      console.warn(err);
      this.showDialogGagal('Nama pengguna dan kata sandi anda tidak cocok');
    });
  }

  parseDataIsianPengguna() {

  }

  cekHasilParseIsianPenggunaCookies() {

  }

  simpanIsianKataSandiPengguna() {

  }

  navigasiHalamanRegistrasi() {

  }

  navigasiHalamanCatatan() {
    console.log('click');
    this.router.navigate(['/catatan']);
  }

  navigasiHalamanLupaPassword() {

  }

  navigasiHalamanKeterangan() {

  }

  navigasiHalamanPasswordGenerator() {

  }

  navigasiHalamanEksporImporCatatan() {

  }

  showDialogGagal(stringPesan: string = '') {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: stringPesan,
      confirmButtonText: 'Setuju',
      customClass: {
        confirmButton: 'button is-success',
      }
    });
  }
}
