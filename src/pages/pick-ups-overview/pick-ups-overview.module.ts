import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickUpsOverviewPage } from './pick-ups-overview';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PickUpsOverviewPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PickUpsOverviewPage),
  ],
  entryComponents: [
    PickUpsOverviewPage
  ]
})
export class PickUpsOverviewPageModule {}
