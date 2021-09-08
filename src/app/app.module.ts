import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { MainViewsComponent } from './main-views/main-views.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { MainFeaturesComponent } from './main-features/main-features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { IntegrationsInfoComponent } from './integrations-info/integrations-info.component';
import { SetupDemoComponent } from './setup-demo/setup-demo.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgComponentComponent } from './svg-component/svg-component.component';
//import { HeaderComponent } from './header/header.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavBarComponent,
    MainViewsComponent,
    CollaborateComponent,
    MainFeaturesComponent,
    TestimonialsComponent,
    TestimonialComponent,
    IntegrationsInfoComponent,
    SetupDemoComponent,
    MainFooterComponent,
    SvgComponentComponent,
    //HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
