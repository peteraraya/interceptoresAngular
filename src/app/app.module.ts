import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Peticiones tradicionales
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,// Peticiones tradicionales
    HttpClientModule
    
  ],
  providers: [
    // Definimos interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
