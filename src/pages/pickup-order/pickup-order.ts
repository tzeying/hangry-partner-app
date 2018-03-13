import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders';

@IonicPage()
@Component({
  selector: 'page-pickup-order',
  templateUrl: 'pickup-order.html',
})
export class PickupOrderPage {

  public order;
  public isVerified: boolean;
  public hasError = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersProvider: OrdersProvider) {
    let id = navParams.get('id');
    let code = navParams.get('code'); 
    if (id != null){
      this.order = this.ordersProvider.getOrderById(id);
    }else if (code != null){
      let secureCodeOrder = this.ordersProvider.getOrderBySecureCode(code); 
      if (secureCodeOrder == null || secureCodeOrder == undefined){
        this.hasError = true;
        return;
      }
      this.order = secureCodeOrder; 
      this.isVerified = true;
    }
  }

}
