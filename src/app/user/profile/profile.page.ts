import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Variável que armazena dados do usuário logado
  user: any;

  constructor(

    // Injeta dependências
    public auth: AngularFireAuth
  ) { }

  ngOnInit() {

    // Verifica se esta logado
    this.auth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

  }

  // Envia usuário para perfil do Google em uma nova aba/janela do navegador
  toGoogle() {
    window.open('https://myaccount.google.com/');
    return false;
  }

}
