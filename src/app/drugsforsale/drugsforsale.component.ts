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
  drugsForSaleList = this.gameService.drugsforSale.concat(this.gameService.drugPrices);
  constructor(public gameService: GameService, public dialog: MatDialog) { }

  ngOnInit() {
  }



  openDialog() {
    this.gameService.buyDrugQuants = [];
    const buydrugsDialog = this.dialog.open(BuydrugsComponent, {
      width: '100%',
      height: '100%',
      data: {},
      disableClose: true,
    });

    buydrugsDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed.');
    });
  }
}
