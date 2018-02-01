import { Injectable } from '@angular/core';
import { Game } from './game';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameService {
  game: BehaviorSubject<Game>;
  constructor() {
      this.game = new BehaviorSubject(
        new Game('Billy')
      );
      this.game.getValue().locations = ['Berlin', 'New York City', 'Tel Aviv',
      'Hong-Kong', 'Amsterdam', 'Bogota', 'Cape Town', 'Sydney', 'Moscow', 'Los Angeles'];
      this.game.getValue().tabIndex = 0;
      this.game.getValue().currentLocation = 'New York City';
      this.game.getValue().playerMoney = 5000;
      this.game.getValue().playerDebt = 2000;
      this.game.getValue().date = 1;
      this.game.getValue().space = 100;
      this.game.getValue().bank = 0;
      this.game.getValue().gun = 'None';
      this.game.getValue().health = 100;
      this.game.getValue().bitches = 8;
   }
}
