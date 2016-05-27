import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Used accross many services
import { HTTP_PROVIDERS } from '@angular/http';

// Application starting point
import { AppComponent } from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS
]);
