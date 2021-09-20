
 var users = ["jorge" , "wolvering" ];
 var passwords = ["1111" , "2222"];
export class Usuario {
  public nombreUsuario = '';
  public password = '';

  
  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }
    else if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 20) {
      return 'El nombre de usuario debe tener entre 3 y 20 caracteres.';
    }
    // si el usuario no está dentro del arreglo, no podrá ingresar
    else if (users.indexOf(this.nombreUsuario) === -1){
      return 'Usuario no registrado'
    }

    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length > 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    if(passwords.indexOf(this.password) ===-1){
      return 'la clave no es correcta'
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
}
