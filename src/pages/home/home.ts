import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DataStorageProvider } from '../../providers/data-storage/data-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public countries: any[] = [];
  constructor(public modalCtrl: ModalController, private data:DataStorageProvider) {

  }

  ionViewDidLoad(){
    this.countries = this.data.getCountrylist();
  }

  OpenModal(noData?:number) {
    let modal = this.modalCtrl.create(ModalPage, {'country': this.countries, "noData": noData});
    modal.onDidDismiss((data) => {
      console.log(data);
    })
    modal.present();
  }


}
