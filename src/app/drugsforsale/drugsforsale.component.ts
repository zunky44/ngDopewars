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
  drugsforsale = DRUG_DATA;
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

const DRUG_DATA: Drug[] = [
  {name: 'Weed', price: 23},
  {name: 'Weed', price: 2234},
  {name: 'Weed', price: 267},
  {name: 'Weed', price: 212},
  {name: 'Weed', price: 2423},
  {name: 'Weed', price: 243},
  {name: 'Weed', price: 56},
];
