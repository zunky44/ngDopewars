import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
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
  constructor(public gameService: GameService) { }

  ngOnInit() {
    // this.gameService.popDrugs();
    // this.gameService.popLocations();

  }

  submitName(): void {
    this.nameSubmitted = true;
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.gameService.tabIndex = tabChangeEvent.index;
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
