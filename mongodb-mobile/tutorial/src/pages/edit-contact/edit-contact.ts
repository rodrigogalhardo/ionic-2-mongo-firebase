import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import {Contato} from "../../models/contato.model";
import {ContatosProvider} from "../../providers/contatos/contatos";

/**
 * Generated class for the EditContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage implements OnInit {
  id:string;
  contato: Contato;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public contatoService: ContatosProvider) {
      this.contato = new Contato();
  }

  ngOnInit(): void {
    this.contato = this.navParams.get('contato');
    this.id = this.contato._id;
  }


  save(id: string, contato: Contato): void {
    this.contatoService.updateContato(this.id, contato);
    this.viewCtrl.dismiss(contato);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditContactPage');
  }

}
