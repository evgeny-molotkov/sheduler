import { Component, OnInit } from '@angular/core';
import { TicketModel } from './models';
import { MatDialog } from '@angular/material';
import {
    AgreementService,
    CorrectService,
    DevService,
    DoneService,
    TestService,
    WaitService
 } from './services';
 import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
 import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    agreementList: Array<TicketModel>;
    waitList:      Array<TicketModel>;
    devList:       Array<TicketModel>;
    testList:      Array<TicketModel>;
    correctList:   Array<TicketModel>;
    doneList:      Array<TicketModel>;

    constructor(
        public dialog: MatDialog,
        private agreementService: AgreementService,
        private correctService: CorrectService,
        private devService: DevService,
        private doneService: DoneService,
        private testService: TestService,
        private waitService: WaitService,
    ) {
        this.agreementList = [];
        this.waitList      = [];
        this.devList       = [];
        this.testList      = [];
        this.correctList   = [];
        this.doneList      = [];
    }

    ngOnInit(): void {
        this.agreementService.getData().subscribe(
            (data) => {
                this.agreementList = data;
        });
        this.correctService.getData().subscribe(
            (data) => {
                this.correctList = data;
        });
        this.devService.getData().subscribe(
            (data) => {
                this.devList = data;
        });
        this.doneService.getData().subscribe(
            (data) => {
                this.doneList = data;
        });
        this.testService.getData().subscribe(
            (data) => {
                this.testList = data;
        });
        this.waitService.getData().subscribe(
            (data) => {
                this.waitList = data;
        });
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            if (event.container.id > event.previousContainer.id + 1) {
                return;
            }

            transferArrayItem(event.previousContainer.data,
                              event.container.data,
                              event.previousIndex,
                              event.currentIndex);
        }
    }

    openTicket(ticket: TicketModel) {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '300px',
            data: {
                name: ticket.name,
                number: ticket.number,
                message: ticket.message,
                status: ticket.status
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            // TODO: dialog closed
        });
    }
}
