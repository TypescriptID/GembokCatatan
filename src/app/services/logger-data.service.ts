import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerDataService {

  constructor() { }

  logData(message: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(message);
    }
  }
}
