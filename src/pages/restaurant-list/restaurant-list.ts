import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantListPage {

	cuisine: string = "";

	constructor(public navCtrl: NavController, 
				  public navParams: NavParams) {
		this.cuisine = this.navParams.get("cuisine");
		console.log(this.cuisine)
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantListPage');
  }

}
