import { Component, OnInit, ViewChild } from '@angular/core';
import { Drug } from '../drug';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectionList } from '@angular/material';
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
  @ViewChild('inv')
  private inv: MatSelectionList;
  ngOnInit() {
    this.gameService.toggleSellDrugs();
  }

  openDialog() {
    this.gameService.popDrugsToSell();
    const selldrugsDialog = this.dialog.open(SelldrugsComponent, {
      height: '100%',
      width: '100%',
      data: {},
      disableClose: true
    });

    selldrugsDialog.afterClosed().subscribe(result => {
      this.inv.deselectAll();
    });
  }

}


