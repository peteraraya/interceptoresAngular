import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // console.log('Paso por el interceptor');


    // Lo que se haga aquí se aplicará a todas las peticiones que pasen por este interceptor
    // Enviar token
    const headers = new HttpHeaders({
                   'token-usuario':'ABC1234545687sdasdsaAASDA'
                   });

     // clonamos req
     const reqClone = req.clone({
        headers
     });
                   

    return next.handle( reqClone )
           .pipe(
             catchError(this.manejarError)
           ); // intercepta cualquier peticion y la deja pasar
  }

  constructor() { }

  manejarError(error: HttpErrorResponse) {
    // Maneje toda la peticion de error
    console.log('Sucedio un error');
    console.log('Registrado en log file');
    console.warn(error);
    return throwError('Error personalizado');
  }
}
