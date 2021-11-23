import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterComponent } from './starter.component';
import { StarterRoutes } from './starter.routing';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes),
    ReactiveFormsModule
  ],
  declarations: [StarterComponent],
  entryComponents: [],
  providers: [DatePipe]
})
export class StarterModule {}
