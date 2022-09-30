import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './product/index/index.component';
import { IndexClientComponent } from './client/index/index.component';
// import { IndexComponent } from './product/index/index.component';
// import { ViewComponent } from './commande/view/view.component';
// import { EditComponent } from './commande/edit/edit.component';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ProductModule,
	ClientModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
