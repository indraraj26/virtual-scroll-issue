import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public countryList: any[] = [];
  public industryList: any [] =[];
  public check: number;
  public countryListFilter: any = {name:''};
  public industryFilter: any = { name: ''};

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    if(navParams.get('country')) {
      this.countryList = navParams.get('country');
    }
    if(navParams.get('check')) {
      this.check = navParams.get('check')
    }
    if(navParams.get('industry')) {
      let tempIndustrylist = navParams.get('industry');
     tempIndustrylist.forEach((v) => {
        this.industryList.push(v);
        if(v.sub_industires) {
         v.sub_industires.forEach((s) => {
           this.industryList.push(s);
         })
        }
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  uSelected(data) {
    this.viewCtrl.dismiss(data);
  }

  dismiss() {
    console.log('called');
    this.viewCtrl.dismiss('cancel');
  }
}
