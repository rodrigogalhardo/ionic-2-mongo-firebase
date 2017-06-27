import {Component, OnInit} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {Contato} from "../../models/contato.model";
import {ContatosProvider} from '../../providers/contatos/contatos';
import {AddContactPage} from "../add-contact/add-contact";
import {EditContactPage} from "../edit-contact/edit-contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  /*styleUrls:['./home.scss']*/
})
export class HomePage implements OnInit {

  contatos: any[];

  constructor(public navCtrl: NavController,
              public contatoService: ContatosProvider,
              public modalController: ModalController) {
  }

  ngOnInit(): void {
    this.contatoService.getContatos().then((resp) => {
      this.contatos = resp;
    });
  }


  ionicViewDidLoad() {
    this.contatoService.getContatos().then((data) => {
      console.warn(data);
      this.contatos = data;
    });
  }

  addContato(): void {
    let modal = this.modalController.create(AddContactPage);
    modal.onDidDismiss(c => {
      if (c) {
        this.contatos.push(c);
      }
    });
    modal.present();
  }

  editarContato(contato): void {
    let modal = this.modalController.create(EditContactPage, {contato: contato});
    modal.present();
  }

  deleteContato(contato) {

    //Remove locally
    let index = this.contatos.indexOf(contato);
    if (index > -1) {
      this.contatos.splice(index, 1);
    }
    //Remove from database
    this.contatoService.deleteContato(contato._id);
  }
}
