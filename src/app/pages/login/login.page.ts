import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  public usuario: Usuario;
 
  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
  }

  public ngOnInit(): void {

    /*
      Las siguientes 3 líneas de código sirven para lo siguiente:
        Caso 1: Si las comentas, la página quedará lista para ingresar el nombre de usuario y la password
        Caso 2: Si dejas las instrucciones sin comentar, entonces entrará inmediatamente a la página home,
          usando el usuario por defecto "cgomezvega" con la password "123". Lo anterior es muy útil
          para el caso en que ya quedó lista la página de login y me interesa probar las otras páginas,
          de este modo se saltará el login y no tendrás que estar digitando los datos todo el tiempo.
    */
    //  this.usuario.nombreUsuario = 'wolvering';
    //  this.usuario.password = '1234';
    //  this.ingresar();
  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/home'], navigationExtras); 
  }

  public validarUsuario(usuario: Usuario): boolean {

    const mensajeError = usuario.validarUsuario();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}
