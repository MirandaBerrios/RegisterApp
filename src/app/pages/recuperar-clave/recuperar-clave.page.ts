import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { ToastController } from '@ionic/angular';
var users = ["jorge" , "wolvering" ];
var passwords = ["1111" , "2222"];
@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})



export class RecuperarClavePage implements OnInit {
  
  public usuario: Usuario;

  constructor(private toastController: ToastController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
    
   }

  ngOnInit() {
  }
  
  public showPass(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }
    if(this.usuario.nombreUsuario === 'jorge'){
    this.mostrarMensaje('password: 1111');
    }
    else if(this.usuario.nombreUsuario === 'wolvering'){
      this.mostrarMensaje('password: 2222');
    }

    
  }

  public validarUsuario(usuario: Usuario): boolean {

    const mensajeError = usuario.validarNombreUsuario();

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
        duration: duracion? duracion: 4000
      });
    toast.present();
  }

}

