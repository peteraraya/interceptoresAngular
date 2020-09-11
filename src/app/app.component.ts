import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';

  // Consumimos el servicio de forma tradicional

  constructor(
    private _usuarioService:UsuariosService
  ){
    this._usuarioService.obtenerUsuarios()
    .subscribe( (resp:any) => {
      console.log(resp);
    }, (err)=>{
        console.log('Error en el appComponent')
    });
  }



}
