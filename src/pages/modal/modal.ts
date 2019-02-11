import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public country: any[] = []
  public data: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.country = navParams.get('country');
    this.data = navParams.get('noData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  dimiss(item) {
    this.viewCtrl.dismiss(item);
  }

}
