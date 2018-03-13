import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KitchenPage } from './kitchen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    KitchenPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(KitchenPage),
  ],
  entryComponents: [
    KitchenPage
  ]
})
export class KitchenPageModule {}
