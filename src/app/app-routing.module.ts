import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroductionComponent } from './homepage/pages/introduction/introduction.component';
import { PluginComponent } from './homepage/pages/plugin/plugin.component';
import { SupportComponent } from './homepage/pages/support/support.component';
import { RedirectGuard } from './shared/guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
        data: { title: 'Support' },
      },
      {
        path: 'plugin',
        component: PluginComponent,
        data: { title: 'Plugin' },
      },
      {
        path: 'providers',
        loadChildren: () =>
          import('./homepage/pages/providers/providers.module').then(
            (m) => m.ProvidersModule,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [RedirectGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
