import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueueOrderPage } from './queue-order';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    QueueOrderPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(QueueOrderPage),
  ],
  entryComponents: [
    QueueOrderPage
  ]
})
export class QueueOrderPageModule {}
