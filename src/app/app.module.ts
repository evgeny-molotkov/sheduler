import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import {
    AgreementService,
    CorrectService,
    DevService,
    DoneService,
    TestService,
    WaitService
} from './services';

import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        DialogComponent
    ],
    entryComponents: [
        DialogComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DragDropModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    providers: [
        AgreementService,
        CorrectService,
        DevService,
        DoneService,
        TestService,
        WaitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
