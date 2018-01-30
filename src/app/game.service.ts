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
   }
   setPlayerName(name) {
     const updateUserName = Object.assign(this.game.value, {playername: name});
     this.game.next(updateUserName);
     return this.game.asObservable();
   }
}
