import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from '../game.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ngdw-buydrugs',
  templateUrl: './buydrugs.component.html',
  styleUrls: ['./buydrugs.component.scss']
})
export class BuydrugsComponent implements OnInit {

  drugtobuy: string;
  orderTotal: number;

  constructor(public gameService: GameService, public buydrugsDialog: MatDialogRef<BuydrugsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.gameService.calculateOrderTotal();

  }

  onCloseClick(): void {
    this.buydrugsDialog.close();
    this.gameService.buyDrugTotal = 0;
  }
  onPurchaseClick(): void {
    this.buydrugsDialog.close();
    this.gameService.buyDrugTotal = 0;
  }


}
