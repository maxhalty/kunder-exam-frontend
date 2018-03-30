import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the BannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'banner',
  templateUrl: 'banner.html'
})
export class BannerComponent {

  banner: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.banner = {};

    this.http.get('https://hack.kunderlabs.com/exam/telecom/api/products/new').map(res => res.json()).subscribe(data => {
    	console.log(data);
        this.banner = data.product;
    });
  }

  OpenUrl() {
  	let browser = new InAppBrowser(this.banner.link, '_system');
  } 

}
