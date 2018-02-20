import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ProductNoChecker} from "./checkers/product-no.checker";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductNoChecker
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
