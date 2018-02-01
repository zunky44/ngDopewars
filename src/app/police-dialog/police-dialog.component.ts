import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ngdw-police-dialog',
  templateUrl: './police-dialog.component.html',
  styleUrls: ['./police-dialog.component.scss']
})
export class PoliceDialogComponent implements OnInit {

  constructor(public policeDialog: MatDialogRef<PoliceDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCloseClick(): void {
    this.policeDialog.close();
  }

}
