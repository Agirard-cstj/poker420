import { Injectable } from '@angular/core';
import { urlServeur } from './utile';
import { HttpClient } from '@angular/common/http';
import { Joueur } from './models/joueur';


@Injectable({
  providedIn: 'root'
})
export class Poker420Service {

  constructor(private http:HttpClient){ 
  }

    getJoueurs(){
      let url = urlServeur + "getJoueurs";
      return this.http.get<Joueur[]>(url);
    }
   
}
