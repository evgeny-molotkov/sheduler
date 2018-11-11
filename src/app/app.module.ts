import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';

import {
    AgreementService,
    CorrectService,
    DevService,
    DoneService,
    TestService,
    WaitService
} from './services';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DragDropModule
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
