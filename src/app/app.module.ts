import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { Facebook } from '@ionic-native/facebook';
import { ComponentsModule } from '../components/components.module';
import { PickUpsOverviewPageModule } from '../pages/pick-ups-overview/pick-ups-overview.module';
import { PreparingOrderPageModule } from '../pages/preparing-order/preparing-order.module';
import { PickupOrderPageModule } from '../pages/pickup-order/pickup-order.module';
import { KitchenPageModule } from '../pages/kitchen/kitchen.module';
import { QueueOrderPageModule } from '../pages/queue-order/queue-order.module';
import { AcceptOrderPageModule } from '../pages/accept-order/accept-order.module';
import { OrdersManagementPageModule } from '../pages/orders-management/orders-management.module';
import { OrdersProvider } from '../providers/orders';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PickUpsOverviewPageModule,
    PreparingOrderPageModule,
    PickupOrderPageModule,
    KitchenPageModule,
    QueueOrderPageModule,
    AcceptOrderPageModule,
    OrdersManagementPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    CognitoIdentityServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrdersProvider
  ]
})
export class AppModule {}
