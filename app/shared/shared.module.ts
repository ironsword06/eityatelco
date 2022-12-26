import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [InputComponent, ButtonComponent, PopUpComponent, LoginComponent, NavbarComponent, SidebarComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('language') || 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [InputComponent, ButtonComponent, PopUpComponent, TranslateModule,MainLayoutComponent],
})
export class SharedModule {}
