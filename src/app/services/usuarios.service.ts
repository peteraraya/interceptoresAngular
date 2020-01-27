import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) {

   }

   obtenerUsuarios(){

    // Parametros
    let params = new HttpParams().append('page','1');
    params = params.append('nombre','Pedro Araya');

    // Enviar token
    // const headers = new HttpHeaders({
    //                'token-usuario':'ABC1234545687sdasdsaAASDA'
    //                });

     // Retorno data
     return this.http.get(`https://reqres.in/api/user`,{
              params,
              // headers
              }).pipe(
                map( (resp:any)=> resp['data'])
                
                ); // envio data

                // catchError(this.manejarError)); // envio error
                // catchError( err => {
                //   console.log('Sucedio un error');
                //   console.log('Registrado en log file');
                //   console.warn(err);
                //   return throwError('Error personalizado');
                // })
              
           }


   manejarError( error:HttpErrorResponse){
     // Maneje toda la peticion de error
     console.log('Sucedio un error');
     console.log('Registrado en log file');
     console.warn(error);
     return throwError('Error personalizado');
   }

}



// Creación de interceptor que sea capas de atrapar cualquier petición que salga de este servicio
// y agrege el token


// Los interceptores no son más que cualquier servicio corriente


