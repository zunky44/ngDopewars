import { Injectable } from '@angular/core';
import { Drug } from './drug';
import { Location } from './location';
import { Gun } from './gun';
import { Officer } from './officer';

@Injectable()
export class GameService {
  playerName = '';
  playerMoney = 5000;
  locationNames = ['Berlin', 'New York City', 'Tel Aviv',
  'Hong-Kong', 'Amsterdam', 'Bogota', 'Cape Town', 'Sydney', 'Moscow', 'Los Angeles'];
  locations: [Location];
  tabIndex = 0;
  currentLocation = 'New York City';
  playerDebt = 2000;
  date = 1;
  space = 100;
  bank = 0;
  gun: Gun;
  health = 100;
  bitches = 8;
  gross = 0;
  officerNames = ['Officer Hardass', 'Seargent Frisk, Lieutenant Flex'];
  drugNames = ['Speed', 'Peyote', 'Weed', 'Hashish', 'Ludes', 'Heroin', 'Acid', 'Shrooms', 'Cocaine',
  'Ketamine', 'PCP', 'Molly', 'Opium'];
  drugs: Drug[] = new Array<Drug>();



  constructor() {
  }

  popDrugs() {
    for (const drug of Object.values(this.drugNames)) {
      const newDrug = new Drug(drug);
      this.drugs.push(newDrug);
    }
  }
}
