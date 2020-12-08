import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { BasicsComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: BasicsComponent,
    data: { title: 'Providers' },
  }];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    BasicsComponent
  ],
})
export class ProvidersModule {}
