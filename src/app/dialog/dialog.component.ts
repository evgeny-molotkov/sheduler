import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TicketModel } from '../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    ticket = new TicketModel;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.ticket.name = data.name ? data.name : '';
        this.ticket.number = data.number ? data.number : '';
        this.ticket.status = data.status ? data.status : '';
        this.ticket.message = data.message ? data.message : '';
    }

    onCloseClick(): void {
        this.dialogRef.close();
    }

}
