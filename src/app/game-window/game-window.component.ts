import { Component, OnInit, Input, Inject } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'ngdw-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  newgame: Game;
  nameSubmitted: Boolean = false;
  showInventory: Boolean = false;

  constructor(private gameService: GameService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getGame();
  }

  getGame(): void {
    this.newgame = this.gameService.gameInit();
  }

  submitName(): void {
    this.nameSubmitted = true;
  }

  getInventory(): void {
    this.showInventory = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(GameWindowDialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
}

@Component({
  selector: 'ngdw-inventory-component',
  templateUrl: '../inventory/inventory.component.html'
})
export class GameWindowDialogComponent {
  constructor(
  public dialogRef: MatDialogRef<GameWindowDialogComponent>) { }
  onExitClick(): void {
    this.dialogRef.close();
  }
}
