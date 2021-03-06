import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialWrapperComponent } from './common/social-wrapper/social-wrapper.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuItemComponent } from './homepage/menu/menu-item/menu-item.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { IntroductionComponent } from './homepage/pages/introduction/introduction.component';
import { BasePageComponent } from './homepage/pages/page/page.component';
import { SupportComponent } from './homepage/pages/support/support.component';
import { SharedModule } from './shared/shared.module';
import { PluginComponent } from './homepage/pages/plugin/plugin.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true,
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    IntroductionComponent,
    BasePageComponent,
    SupportComponent,
    SocialWrapperComponent,
    PluginComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AppModule {}
