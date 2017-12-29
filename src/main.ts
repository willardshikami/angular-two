import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app/app.router';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);