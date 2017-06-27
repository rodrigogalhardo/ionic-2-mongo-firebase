import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, AlertController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireDatabaseModule, FirebaseObjectObservable} from "angularfire2/database";
import {Contato} from "../../models/contato.model";
import {AngularFireModule} from "angularfire2";

/**
 * Generated class for the EditaContatoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edita-contato',
  templateUrl: 'edita-contato.html',
})
export class EditaContatoPage implements OnInit {
  ref: FirebaseObjectObservable<any>;
  id: string;
  contato: Contato;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController,
              public db: AngularFireDatabase) {
    this.contato = new Contato();
  }

  ngOnInit() {
    this.id = this.navParams.get('id');
    this.db.database.ref('/contato/' + this.id).once('value').then((snap) => {
      this.contato = snap.val();
      this.ref = snap.val();
    });
  }

  salvar(): void {
    this.db.database.ref('/contato/' + this.id).set(this.contato).then((resp) => {
      console.log(resp);
      this.viewCtrl.dismiss();
    });
  }

  excluir(id: string): void {
    let confirm = this.alertCtrl.create({
      title: this.contato.nome,
      message: 'Deseja mesmo excluir este contato?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Operação cancelada pelo usuário.");
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.db.database.ref('/contato/' + this.id).remove().then(() => {
              console.log('Registro removido com sucesso :)');
            });
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

  fechar(): void {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaContatoPage');
  }

}
