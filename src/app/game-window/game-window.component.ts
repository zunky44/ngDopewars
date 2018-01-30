import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'ngdw-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  nameSubmitted: Boolean = false;
  playername: string;
  currentLocation: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.game.subscribe();
    this.gameService.game.getValue().locations = ['Berlin', 'New York City', 'Tel Aviv',
    'Hong-Kong', 'Amsterdam', 'Bogota', 'Cape Town', 'Sydney', 'Moscow', 'Los Angeles'];
    this.gameService.game.getValue().currentLocation = 'New York City';
    this.currentLocation = this.gameService.game.getValue().currentLocation;
    this.gameService.game.getValue().tabIndex = 0;
  }

  submitName(): void {
    this.nameSubmitted = true;
    this.gameService.setPlayerName(this.playername);
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.gameService.game.getValue().tabIndex = tabChangeEvent.index;
  }
}
