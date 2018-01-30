import { Component, OnInit, Input, Inject } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InventoryService } from '../inventory.service';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'ngdw-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  newgame: Game;
  nameSubmitted: Boolean = false;
  inventory: string[];

  constructor(private gameService: GameService, private inventoryData: InventoryService, public inventoryDialog: MatDialog) { }

  ngOnInit() {
    this.getGame();
    this.inventoryData.currentInventory.subscribe(inventory => this.inventory = inventory);
  }

  getGame(): void {
    this.newgame = this.gameService.gameInit();
  }

  submitName(): void {
    this.nameSubmitted = true;
  }

  addToInventory(item): void {
    this.inventory.push(item);
  }

  openInventory() {

    const inv = this.inventoryDialog.open(InventoryComponent, {
      width: '50%'
    });

    // inv.afterClosed().subscribe(result => {
    //   console.log('Dialog result: ${result}');
    // });
    this.inventoryData.changeInventory(this.inventory);
  }
}
