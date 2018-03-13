import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list';
import { IonicModule } from 'ionic-angular';
import { OrderSummaryComponent } from './order-summary/order-summary';
import { OrderDetailsComponent } from './order-details/order-details';
import { NavbarComponent } from './navbar/navbar';

@NgModule({
	declarations: [
		OrderListComponent,
		OrderSummaryComponent,
		OrderDetailsComponent,
		NavbarComponent
	],
	imports: [IonicModule],
	exports: [
		OrderListComponent,
		OrderSummaryComponent,
    	OrderDetailsComponent,
		NavbarComponent
	]
})
export class ComponentsModule {}
