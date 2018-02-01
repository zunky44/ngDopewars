import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { MatTabChangeEvent } from '@angular/material';
import {ComponentCanDeactivate, PendingChangesGuard} from '../guard';
import { Observable } from 'rxjs/Observable';
import { HostListener } from '@angular/core';


@Component({
  selector: 'ngdw-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit, PendingChangesGuard {

  nameSubmitted: Boolean = false;
  playername: string;
  currentLocation: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.game.subscribe();
    this.gameService.game.getValue().locations = ['Berlin', 'New York City', 'Tel Aviv',
    'Hong-Kong', 'Amsterdam', 'Bogota', 'Cape Town', 'Sydney', 'Moscow', 'Los Angeles'];
    this.gameService.game.getValue().drugstobuy = ['Weed', 'Speed', 'Etc'];
    this.gameService.game.getValue().drugstosell = ['Weed', 'Speed', 'Etc'];
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

      // @HostListener allows us to also guard against browser refresh, close, etc.
      @HostListener('window:beforeunload')
      canDeactivate(): Observable<boolean> | boolean {
        // insert logic to check if there are pending changes here;
        // returning true will navigate without confirmation
        // returning false will show a confirm dialog before navigating away
        return false;
      }
}
