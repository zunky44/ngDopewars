import { Component, OnInit } from '@angular/core';
import { Drug } from '../drug';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelldrugsComponent } from '../selldrugs/selldrugs.component';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  drugsinventory = DRUG_DATA;
  displayedColumns = ['name', 'price'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog() {
    const selldrugsDialog = this.dialog.open(SelldrugsComponent, {
      width: '100%',
      data: {},
      disableClose: true
    });

    selldrugsDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed.');
    });
  }

}




const DRUG_DATA: Drug[] = [
  {name: 'Weed', price: 23},
  {name: 'Weedwwwwwwwwwww', price: 2234},
  {name: 'Weed', price: 267},
  {name: 'Weed', price: 212},
  {name: 'Weed', price: 2423},
  {name: 'Weed', price: 243},
  {name: 'Weed', price: 56},
];
