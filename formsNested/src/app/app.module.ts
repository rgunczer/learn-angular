import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { PersonalComponent } from './personal/personal.component';
import { ParentBeeComponent } from './parent-bee/parent-bee.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PersonalComponent,
    ParentBeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
