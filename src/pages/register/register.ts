import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettingsProvider } from '../../providers/app-settings/app-settings';
import { LinkuseraccountPage } from '../linkuseraccount/linkuseraccount';
import { RegistersixPage } from '../registersix/registersix';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  apiUrl = this.appSettings.getApiUrl();
  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  public appSettings: AppSettingsProvider, private alertCtrl: AlertController) {
  }


  register() {
    if(this.user.email.match(/@/g)) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.apiUrl + 'register', JSON.stringify(this.user), {headers:headers})
        .map(res => res.json())
        .subscribe(data => {
          if(data.success === true) {
            this.navCtrl.push('RegistersixPage');
          }
          else if(data.success === false) {
            let alert = this.alertCtrl.create({
              title: 'Bad Request',
              subTitle: 'Email already exists, please a different email',
              buttons: ['Dismiss']
            });
            alert.present();
          }
        })
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Not A Valid Email',
        subTitle: 'Please Try Again',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

}
