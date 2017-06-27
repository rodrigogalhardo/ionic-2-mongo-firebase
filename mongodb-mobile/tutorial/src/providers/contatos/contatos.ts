import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Contato} from "../../models/contato.model";

/*
 Generated class for the ContatosProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class ContatosProvider {
  data: any;
  uri: string = "http://localhost:3000/api/v1";

  constructor(public http: Http) {
    this.data = null;
  }

  getContatos(): Promise<any> {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.uri + "/contato").map(res => res.json())
        .subscribe((subs) => {
          this.data = subs;
          resolve(this.data);
        });
    })
  }

  getContatosById(id: string): Promise<any> {

    return new Promise(resolve => {
      this.http.get(this.uri + "/contato/" + id).map(res => res.json())
        .subscribe((subs) => {
          this.data = subs;
          resolve(this.data);
        });
    })
  }

  createContato(contato): void {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let model = JSON.stringify(contato);
    this.http.post(this.uri + "/contato", model, {headers: headers})
      .subscribe((res) => {
        console.log(res.json());
      });
  }

  updateContato(id: string, contato: Contato): void {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.put(this.uri + '/contato/' + id, contato, {headers: headers}).subscribe((res) => {
      console.log(res.json());
    });
  }

  deleteContato(id: string): void {
    this.http.delete(this.uri + '/contato/' + id).subscribe((res) => {
      console.warn(res.json());
    })
  }

}
