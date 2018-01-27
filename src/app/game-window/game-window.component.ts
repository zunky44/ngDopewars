import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'ngdw-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  newgame: Game;
  nameSubmitted: Boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGame();
  }

  getGame(): void {
    this.newgame = this.gameService.gameInit();
  }

  submitName(): void {
    this.nameSubmitted = true;
  }
}
