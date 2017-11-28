import { AppSettingsProvider } from './../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
// import { user } from '../../pages/login/login';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TestServiceProvider {
  acc = [];
  apiUrl = this.appSettings.getApiUrl();

  constructor(public http: Http, public appSettings: AppSettingsProvider, public events: Events) {
    this.getAccounts();
    this.getTransactions();
    this.getList();
    // this.loginUser();
  }

  // loginUser() {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   return this.http.post( this.apiUrl + 'login', JSON.stringify(this.user), {headers:headers})
  //     .map(res => res.json())
  //     // .subscribe(data => {
  //     //   if(data.login === 'yes') {
  //     //     this.token = data.token;
  //     //     return this.navCtrl.setRoot('MenuPage')
  //     //   }
  //     //   else {
  //     //     console.log('Bad login cridentials');
  //     //   }
  //     // })
  // }

  ionViewDidLoad() {
    this.events.subscribe('token:added', (data) => {
      console.log('>>>>>>>>>>>>>>>>> token added is ', data)
    })
  }

  getAccounts(){
     return this.http.get(this.apiUrl+'accounts')
     .map(response => response.json());
   }

   getTransactions() {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');

     return this.http.get(this.apiUrl + 'transactions')
     .map(res => res.json());
   }

  getList(){
     return this.http.get(this.apiUrl+'list')
     .map(response=> response.json().result);
   }

  getAccountById(id) {
    return this.http.get(this.apiUrl+'account/:' + id)
      .map(response => response.json().result);
  }

  // getList(){
  //   return this.http.get(this.apiUrl+'list')
  //     .map(response=> response.json().result);
  // }

  getBuckets() {
    return this.http.get(this.apiUrl+'buckets')
      .map(response=> response.json().result);
  }

  getNotifications() {
    return this.http.get(this.apiUrl+'notifications')
      .map(response=> response.json().result);
  }

  postNotifications(notification) {
    // let body = JSON.stringify(notification);
    console.log("post in test service");

    return this.http.post(this.apiUrl+'notifications', notification)
      .map(response => response.json().result);

      // .subscribe(
      //   data => {
      //     console.log(data['_body']);
      //   },
      //   error => alert(error)
      // )
  }
}
