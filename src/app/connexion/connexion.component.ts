import { Component } from '@angular/core';
import { tr } from '../utile';
import { Joueur } from '../models/joueur';
import { Poker420Service } from '../poker420.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


  connexionVisible=true;
  creerCompteVisible=false;

  constructor(private pk420Srv:Poker420Service){}

  joueurConnecte:Joueur= new Joueur();
  joueurCandidat:Joueur = new Joueur();
  confirmation="";




  creationCompte(){
    tr("Création d'un compte")
    this.connexionVisible=false;
    this.creerCompteVisible=true;
  }

  connexion(){
    tr("Connexion de " + this.joueurCandidat.nom);
  }

  validerCreatioCompte() {
    tr("validation de " + this.joueurCandidat.nom);
    return true;
  }

  annulerCreationCompte(){
    this.connexionVisible=true;
    this.creerCompteVisible=false;
  }

  afficherTousLesJoueurs(){
    this.pk420Srv.getJoueurs().subscribe(
      tabj => {
        tr("Il y a " + tabj.length + " joueurs dans la BD",true);
      }
    )
  }

}
