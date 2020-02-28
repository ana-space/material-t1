import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module'

import { CustomSbackBarComponent } from './mat/mat.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TableDisplayFlexComponent } from './table-display-flex/table-display-flex.component';
import { MatComponent } from './mat/mat.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSbackBarComponent,
    DialogExampleComponent,
    TableDisplayFlexComponent,
    MatComponent
  ],
  entryComponents:[CustomSbackBarComponent, DialogExampleComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
