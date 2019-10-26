import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLoadersService } from 'src/app/services/data-loaders.service';

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

  }

  cekIsianPengguna() {

  }

  parseDataIsianPengguna() {

  }

  cekHasilParseIsianPenggunaCookies() {

  }

  simpanIsianKataSandiPengguna() {

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
}
