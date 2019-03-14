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
  public industries: any[] = [];
  constructor(public modalCtrl: ModalController, private data:DataStorageProvider) {

  }

  ionViewDidLoad(){
    this.countries = this.data.getCountrylist();
    this.industries = this.data.getIndustrylist();
  }

  OpenModal(check:number) {
    let modal = this.modalCtrl.create(ModalPage, {'country': this.countries, "industry": this.industries, "check": check});
    modal.onDidDismiss((data) => {
      console.log(data);
    })
    modal.present();
  }


}
