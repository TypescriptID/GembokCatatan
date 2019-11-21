import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryLoadersService } from './services/library-loaders.service';
import { DataStorageService } from './services/data-storage.service';
import { StatedataServicesService } from './services/statedata-services.service';
import { LoggerDataService } from 'src/app/services/logger-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LibraryLoadersService,
    DataStorageService,
    StatedataServicesService,
    LoggerDataService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
