import { Component, OnInit, Input, Inject } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataService } from '../data.service';

@Component({
  selector: 'ngdw-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  newgame: Game;
  nameSubmitted: Boolean = false;
  showInventory: Boolean = false;
  message: string[];
  itemToAdd: string;

  constructor(private gameService: GameService, private data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getGame();
    this.data.currentMessage.subscribe(message => this.message = message);
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

  addToInventory(item): void {
    this.message.push(item);
  }

  openDialog() {

    const dialogRef = this.dialog.open(GameWindowDialogComponent, {
      width: '50%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog result: ${result}');
    // });
    this.data.changeMessage(this.message);
  }
}

@Component({
  selector: 'ngdw-inventory-component',
  templateUrl: '../inventory/inventory.component.html'
})
export class GameWindowDialogComponent {
  message: string[];
  constructor(
  public dialogRef: MatDialogRef<GameWindowDialogComponent>, private data: DataService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  onExitClick(): void {
    this.dialogRef.close();
  }
}
