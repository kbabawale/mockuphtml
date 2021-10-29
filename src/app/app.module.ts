import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FeaturedReviewComponent } from './featured-review/featured-review.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CompaniesComponent } from './companies/companies.component';
import { AdvertComponent } from './advert/advert.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    FeaturedReviewComponent,
    NewsletterComponent,
    CompaniesComponent,
    AdvertComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
