import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { DataService } from './services/data.service'; 

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MessagesComponent } from './services/messages-service/messages.component';
import { MessagesService } from './services/messages-service/messages.service';

import { ConfirmDialogService } from './services/confirm-dialog/confirm-dialog.service';
import { ConfirmDialogComponent } from './services/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ 
    AppComponent,
    MessagesComponent,
    ConfirmDialogComponent
  ],
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    ConfirmDialogService,
    MessagesService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [
    ConfirmDialogComponent,
    MessagesComponent
  ]
})
export class AppModule { }
