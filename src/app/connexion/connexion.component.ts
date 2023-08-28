import { Component } from '@angular/core';
import { tr } from '../utile';
import { Joueur } from '../models/joueur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  connexionVisible=true;

  joueurConnecte:Joueur= new Joueur

  creationCompte(){
    tr("Création d'un compte")
  }

  connexion(){
    tr("Se connecter")
  }

}
