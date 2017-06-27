import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ListaContatosPage} from './lista-contatos';
import {EditaContatoPage} from "../edita-contato/edita-contato";

@NgModule({
  declarations: [
    ListaContatosPage,
    EditaContatoPage
  ],
  imports: [
    IonicPageModule.forChild(ListaContatosPage),
    EditaContatoPage
  ],
  exports: [
    ListaContatosPage
  ]
})
export class ListaContatosPageModule {
}
