import { Component, OnInit } from '@angular/core';
import { Drug } from '../drug';
import { GameService } from '../game.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BuydrugsComponent } from '../buydrugs/buydrugs.component';


@Component({
  selector: 'ngdw-drugsforsale',
  templateUrl: './drugsforsale.component.html',
  styleUrls: ['./drugsforsale.component.css']
})

export class DrugsforsaleComponent implements OnInit {

  displayedColumns = ['name', 'price'];
  constructor(public gameService: GameService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  addCash(amount) {
    this.gameService.playerMoney += amount;
  }

  openDialog() {
    const buydrugsDialog = this.dialog.open(BuydrugsComponent, {
      width: '100%',
      data: {},
      disableClose: true,
    });

    buydrugsDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed.');
    });
  }
}
