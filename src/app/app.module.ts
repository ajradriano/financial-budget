import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng.module';
import { MenubarComponent } from './template/menu/menubar/menubar.component';
import { SidebarComponent } from './template/menu/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
  ],
  exports: [
    PrimengModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
