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
  locations = {};
  drugsforSale = [];
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
  drugs = {};
  drugPrices = [];
  drugsAndPrices = [];
  drugsToBuy = [];
  buyDrugQuants = [];
  buyDrugTotal = 0;

  constructor() {
  }

  popDrugs() {
    for (const drug of Object.values(this.drugNames)) {
      const newDrug = new Drug(drug);
      this.drugs[drug] = newDrug;
    }

    this.drugs['Speed'].minprice = 90;
    this.drugs['Speed'].maxprice = 250;

    this.drugs['Peyote'].minprice = 220;
    this.drugs['Peyote'].maxprice = 700;

    this.drugs['Weed'].minprice = 315;
    this.drugs['Weed'].maxprice = 890;

    this.drugs['Hashish'].minprice = 480;
    this.drugs['Hashish'].maxprice = 1280;

    this.drugs['Ludes'].minprice = 11;
    this.drugs['Ludes'].maxprice = 60;

    this.drugs['Heroin'].minprice = 5500;
    this.drugs['Heroin'].maxprice = 13000;

    this.drugs['Acid'].minprice = 1000;
    this.drugs['Acid'].maxprice = 4400;

    this.drugs['Shrooms'].minprice = 630;
    this.drugs['Shrooms'].maxprice = 1300;

    this.drugs['Cocaine'].minprice = 15000;
    this.drugs['Cocaine'].maxprice = 29000;

    this.drugs['Ketamine'].minprice = 30;
    this.drugs['Ketamine'].maxprice = 80;

    this.drugs['PCP'].minprice = 1000;
    this.drugs['PCP'].maxprice = 2500;

    this.drugs['Molly'].minprice = 1500;
    this.drugs['Molly'].maxprice = 4400;

    this.drugs['Opium'].minprice = 540;
    this.drugs['Opium'].maxprice = 1250;
  }
  popLocations() {
    for (const loc of Object.values(this.locationNames)) {
      const mind = Math.floor(Math.random() * (13 - 5) + 5);
      const maxd = Math.floor(Math.random() * (13 - mind) + mind);
      const numd = Math.floor(Math.random() * (maxd - mind) + mind);
      const newLocation = new Location(loc);
      newLocation.numDrugs = numd;
      this.locations[newLocation.name] = newLocation;
    }
  }
  getDrugsForSale() {
    let max = this.drugNames.length;
    let result = this.drugNames.slice(0);
    for (let i = 0; i < 30; i++) {
        let source = Math.floor(Math.random() * (max - 1) - 0);
        let dest = Math.floor(Math.random() * (max - 1) - 0);
        let aux = result[source];
        result[source] = result[dest];
        result[dest] = aux;
    }

    this.drugsforSale = result.slice(0, this.locations[this.currentLocation].numDrugs);
  }
  getDrugPrices() {
    this.drugPrices = [];

    for (const drug of Object.values(this.drugsforSale)) {
      const min = this.drugs[drug].minprice;
      const max = this.drugs[drug].maxprice;
      const randnum = Math.floor(Math.random() * (max - min + 1) + min);
      this.drugPrices.push(randnum);
    }
  }

  mergeDrugsPrices() {
    this.drugsAndPrices = [];
    for (let i = 0; i < this.drugsforSale.length; i++) {
      this.drugsAndPrices.push({drug: this.drugsforSale[i], price: this.drugPrices[i]});
    }
  }
  calculateOrderTotal() {
    this.buyDrugTotal = 0;

    for (let i = 0; i < this.drugsToBuy.length; i++) {
      if (this.buyDrugQuants[i] === null) { this.buyDrugQuants[i] = 1;
      }
      if (this.buyDrugQuants[i] < 1) {
        this.buyDrugQuants[i] = 1;
      }
      if (this.buyDrugQuants[i] === undefined) {
        this.buyDrugQuants[i] = 1;
      }
    }
    console.log(this.buyDrugQuants + 'quants');
    for (const i of Object.values(this.drugsToBuy)) { console.log(i.price); }
    for (let i = 0; i < this.drugsToBuy.length; i++) {
      const subtotal = this.drugsToBuy[i].price * this.buyDrugQuants[i];
      this.buyDrugTotal += subtotal;
      console.log(subtotal, this.buyDrugTotal);
    }
  }
}

