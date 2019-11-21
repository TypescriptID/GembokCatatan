import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerDataService {

  constructor() { }

  // jalankan log data jika bukan mode produksi
  logData(message: any) {
    if (!environment.production) {
      console.warn(message);
    }
  }
}
