import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLoadersService } from 'src/app/services/data-loaders.service';
import Swal from 'sweetalert2';
import { PasswordCekModel } from 'src/app/models/PasswordCek';
import { CatatanItem } from 'src/app/models/CatatanItem';
import { StatedataServicesService } from 'src/app/services/statedata-services.service';
import { LoggerDataService } from 'src/app/services/logger-data.service';

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

  loginDataValid = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private readonly dataservice: DataLoadersService,
              private readonly stateservice: StatedataServicesService,
              private readonly loggers: LoggerDataService) { }

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
        this.loginDataValid.username = this.loginData.username;
        this.loginDataValid.password = this.loginData.password;

        // lakukan pengecekan apakah bisa dipakai untuk membuka data catatan
        this.parseDataCatatanPenggunaTersimpan();
      } else {
        this.showDialogGagal('Nama pengguna dan kata sandi anda tidak cocok');
      }
    })
    .catch((err) => {
      this.loggers.logData(err);
      this.showDialogGagal('Nama pengguna dan kata sandi anda tidak cocok');
    });
  }

  parseDataCatatanPenggunaTersimpan() {
    // cek apakah password isian yang benar tadi bisa dipakai untuk membuka catatan
    this.dataservice.getDataCatatanStorage(this.loginDataValid.password)
    .then((result: CatatanItem[]) => {
      if (result.length >= 0) {
        // catatan berhasil dibuka dengan kata sandi
        this.simpanStateDataLogin();
      }
    })
    .catch((err) => {
      this.loggers.logData(err);
      this.showDialogGagal('Catatan yang disimpan tidak dapat dibuka dengan kata sandi yang anda masukkan');
    });
  }

  simpanStateDataLogin() {
    // catatan berhasil dibuka dan kata sandi benar
    // pindah ke halaman isi catatan
    this.stateservice.setIsianDataPenggunaTemp(this.loginDataValid.username, this.loginDataValid.password);
    this.navigasiHalamanCatatan();
  }

  navigasiHalamanRegistrasi() {
    this.router.navigate(['/masuk-login/registrasi-pengguna'], { replaceUrl: true });
  }

  navigasiHalamanCatatan() {
    this.router.navigate(['/catatan'], { replaceUrl: true});
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
      title: 'Gagal...',
      text: stringPesan,
      confirmButtonText: 'Setuju',
      customClass: {
        confirmButton: 'button is-success',
      }
    });
  }
}
