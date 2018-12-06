import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OhmenuComponent } from './ohmenu/ohmenu.component';
import { OhsidenavComponent } from './ohsidenav/ohsidenav.component';
import { OhmainpaneComponent } from './ohmainpane/ohmainpane.component';
import { OhsidepaneComponent } from './ohsidepane/ohsidepane.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OhmenuComponent,
    OhsidenavComponent,
    OhmainpaneComponent,
    OhsidepaneComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
