import { Component, Input } from '@angular/core';

/**
 * Generated class for the OrderSummaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryComponent {

  @Input() customerName: string;
  @Input() timeRemaining: number;
  @Input() price: number;

  constructor() {

  }

}
