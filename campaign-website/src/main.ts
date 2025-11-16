import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { register } from 'swiper/element/bundle';
import * as AOS from 'aos';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

register(); // تسجيل عناصر Swiper
AOS.init();
