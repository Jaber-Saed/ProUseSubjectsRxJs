import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DataServicService } from './services/data-servic.service';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component],
  imports: [BrowserModule, FormsModule],
  providers: [DataServicService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private DataServicService: DataServicService) {}
}
