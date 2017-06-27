import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Contato} from "../../models/contato.model";
import {ContatosProvider} from "../../providers/contatos/contatos";

/**
 * Generated class for the AddContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
  /*styleUrls: ['./add-contact.scss']*/
})
export class AddContactPage {
  contato: Contato;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public contatoService: ContatosProvider) {
    this.contato = new Contato();
  }

  save(contato:Contato): void {
    this.contatoService.createContato(contato);
    this.viewCtrl.dismiss(contato);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

}
