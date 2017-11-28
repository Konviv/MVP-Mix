import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistersevenPage } from '../registerseven/registerseven';

/**
 * Generated class for the RegistersixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registersix',
  templateUrl: 'registersix.html',
})
export class RegistersixPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  linkBank() {
    this.navCtrl.push('RegistersevenPage');
  }

}
