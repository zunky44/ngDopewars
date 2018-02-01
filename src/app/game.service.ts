import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  playerName = '';
  playerMoney = 5000;
  locations = ['Berlin', 'New York City', 'Tel Aviv',
  'Hong-Kong', 'Amsterdam', 'Bogota', 'Cape Town', 'Sydney', 'Moscow', 'Los Angeles'];
  tabIndex = 0;
  currentLocation = 'New York City';
  playerDebt = 2000;
  date = 1;
  space = 100;
  bank = 0;
  gun = 'None';
  health = 100;
  bitches = 8;
  gross = 0;
  constructor() {
   }
}
