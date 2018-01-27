import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class GameService {

  constructor() { }
  gameInit(): Game {
    const newgame = new Game;
    newgame.playername = 'Billy';
    return newgame;
  }

}
