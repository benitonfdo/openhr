import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OhmenuComponent } from './ohmenu/ohmenu.component';
import { OhsidenavComponent } from './ohsidenav/ohsidenav.component';
import { OhmainpaneComponent } from './ohmainpane/ohmainpane.component';
import { OhsidepaneComponent } from './ohsidepane/ohsidepane.component';

@NgModule({
  declarations: [
    AppComponent,
    OhmenuComponent,
    OhsidenavComponent,
    OhmainpaneComponent,
    OhsidepaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
