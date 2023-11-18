import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './Pizzas/pizza-list/pizza-list.component';
import { BorderCardDirective } from './shared/directive/border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    BorderCardDirective  // components directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //module angular, autre smodules
  ],
  providers: [], //sevice
  bootstrap: [AppComponent]
})
export class AppModule { }
