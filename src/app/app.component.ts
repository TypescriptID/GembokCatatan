import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibraryLoadersService } from './services/library-loaders.service';
import { Subscription } from 'rxjs';
import { LoggerDataService } from './services/logger-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'GembokCatatans';

  subscriptions: Subscription = new Subscription();

  constructor(private readonly loaderLibrary: LibraryLoadersService,
              private readonly loggers: LoggerDataService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.loadLibraryCSS();
  }

  loadLibraryCSS() {
    const subs = this.loaderLibrary.loadViewLibraryCSS().subscribe(
      () => {
        this.loggers.logData('library loaded');
      },
      (errors) => {
        this.loggers.logData(errors);
      }
    );

    this.subscriptions.add(subs);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
