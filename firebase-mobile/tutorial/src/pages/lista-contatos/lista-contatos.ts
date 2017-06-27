import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

/*
 * Models
 * */
import {Contato} from '../../models/contato.model';
import {EditaContatoPage} from "../edita-contato/edita-contato";


@IonicPage()
@Component({
  selector: 'page-lista-contatos',
  templateUrl: 'lista-contatos.html',
})
export class ListaContatosPage {
  lista: FirebaseListObservable<any>;
  contato: Contato;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: AngularFireDatabase,
              public modal: ModalController) {

    this.lista = this.db.list('/contato');
    this.contato = new Contato();
  }

  cadastrar(contato: Contato): void {
    this.lista.push(this.contato).then(() => {
      this.contato.nome = "";
      this.contato.cpf = "";
      this.contato.email = "";
      this.contato.telefone = "";
    });
  }

  editar(id: string) {
    this.modal.create(EditaContatoPage, {id: id}).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaContatosPage');
  }

}
