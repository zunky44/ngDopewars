import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InventoryComponent>) { }

  onExitClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
