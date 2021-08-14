import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/app/core/components/header/header.module';
import { NotificationService } from '@services/notification/notification.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HeaderModule],
  providers: [{ provide: NotificationService, useClass: NotificationService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
