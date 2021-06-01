import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { BandsListComponent } from './bands/bands-list/bands-list.component';
import { BandDetailedComponent } from './bands/band-detailed/band-detailed.component';
import { BandsService } from './bands/bands.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BandFormComponent } from './bands/band-form/band-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    BandsListComponent,
    BandDetailedComponent,
    BandFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
