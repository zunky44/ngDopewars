import { Component, OnInit } from '@angular/core';
import { Drug } from '../drug';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelldrugsComponent } from '../selldrugs/selldrugs.component';
import { GameService } from '../game.service';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  displayedColumns = ['name', 'price'];

  constructor(public dialog: MatDialog, public gameService: GameService) { }

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


