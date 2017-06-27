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
    this.id = this.navParams.get('id');
    this.contatoService.getContatosById(this.id).then((resp)=>{
      this.contato = resp;
    });
  }


  save(id: string, contato: Contato): void {
    this.contatoService.updateContato(id, contato);
    this.viewCtrl.dismiss(contato);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditContactPage');
  }

}
