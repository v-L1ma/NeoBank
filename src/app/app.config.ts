import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import{ provideEnvironmentNgxMask, NgxMaskConfig } from "ngx-mask"

import { routes } from './app.routes';
import { customInterceptor } from './services/custom.interceptor';

const maskConfig: Partial<NgxMaskConfig> = {
  validation: false,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([customInterceptor])
    ),
    provideEnvironmentNgxMask(maskConfig),
  ],
};
