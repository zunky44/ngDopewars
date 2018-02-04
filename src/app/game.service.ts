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
  buyMaxQuantity = [];
  drugsPurchased = [];
  drugInventory = {
    Speed: {Name: 'Speed', Quantity: 0, Lpp: 0},
    Peyote: {Name: 'Peyote', Quantity: 0, Lpp: 0},
    Weed: {Name: 'Weed', Quantity: 0, Lpp: 0},
    Hashish: {Name: 'Hashish', Quantity: 0, Lpp: 0},
    Ludes: {Name: 'Ludes', Quantity: 0, Lpp: 0},
    Heroin: {Name: 'Heroin', Quantity: 0, Lpp: 0},
    Acid: {Name: 'Acid', Quantity: 0, Lpp: 0},
    Shrooms: {Name: 'Shrooms', Quantity: 0, Lpp: 0},
    Cocaine: {Name: 'Cocaine', Quantity: 0, Lpp: 0},
    Ketamine: {Name: 'Ketamine', Quantity: 0, Lpp: 0},
    PCP: {Name: 'PCP', Quantity: 0, Lpp: 0},
    Molly: {Name: 'Molly', Quantity: 0, Lpp: 0},
    Opium: {Name: 'Opium', Quantity: 0, Lpp: 0}
  };
  drugsToSell = [];
  sellDrugQuants = [];
  orderProfit = 0;
  canSell = false;
  drugsSold = [];



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
    this.buyMaxQuantity = [];

    for (let i = 0; i < this.drugsToBuy.length; i++) {
      if (this.buyDrugQuants[i] === null) { this.buyDrugQuants[i] = 0;
      }
      if (this.buyDrugQuants[i] === undefined) {
        this.buyDrugQuants[i] = 0;
      }
    }
    for (let i = 0; i < this.drugsToBuy.length; i++) {
      const subtotal = this.drugsToBuy[i].price * this.buyDrugQuants[i];
      this.buyDrugTotal += subtotal;
    }
    for (let i = 0; i < this.drugsToBuy.length; i++) {
      const cash = this.playerMoney - this.buyDrugTotal;
      const price = this.drugsToBuy[i].price;
      this.buyMaxQuantity.push(Math.floor(cash / price));
    }
  }
  popDrugsPurchased() {
    this.drugsPurchased = [];
    for (let i = 0; i < this.drugsToBuy.length; i++) {
      this.drugsPurchased.push({Drug: this.drugsToBuy[i], Quantity: this.buyDrugQuants[i]});
    }
  }
  addToInventory() {
    for (let i = 0; i < this.drugsPurchased.length; i++) {
      if (this.drugsPurchased[i].Quantity > 0) {
        this.drugInventory[this.drugsPurchased[i].Drug.drug].Quantity += this.drugsPurchased[i].Quantity;
        this.drugInventory[this.drugsPurchased[i].Drug.drug].Lpp = this.drugsPurchased[i].Drug.price;
      }
    }
  }
  popDrugsToSell() {
    for (const drug of Object.values(this.drugInventory)) {
      if (drug.Quantity > 0) {
        if (!this.drugsToSell.includes(drug)) {
          this.drugsToSell.push(drug);
        }
      }
    }
  }
  toggleSellDrugs() {
    const drugsInInventory = [];
    for (const drug of Object.values(this.drugInventory)) {
      if (drug.Quantity > 0) {
        drugsInInventory.push(drug.Name);
      }
    }
    for (const drug of Object.values(drugsInInventory)) {
      if (this.drugsforSale.includes(drug)) {
        this.canSell = true;
        break;
      } else {
        this.canSell = false;
      }
    }
  }
  calculateOrderProfit() {
    this.orderProfit = 0;
    for (let i = 0; i < this.drugsToSell.length; i++){
      if (this.sellDrugQuants[i] === null) { this.sellDrugQuants[i] = 0;
      }
      if (this.sellDrugQuants[i] === undefined) {
        this.sellDrugQuants[i] = 0;
      }
    }
    for (let i = 0; i < this.drugsToSell.length; i++) {
      for (let j = 0; j < this.drugsAndPrices.length; j++) {
        if (this.drugsToSell[i].Name === this.drugsAndPrices[j].drug) {
          this.orderProfit += this.sellDrugQuants[i] * this.drugsAndPrices[j].price;
        }
      }
    }
  }
  popDrugsSold() {
    this.drugsSold = [];
    for (let i = 0; i < this.drugsToSell.length; i++) {
      this.drugsSold.push({Drug: this.drugsToSell[i].Name, Quantity: this.sellDrugQuants[i]});
    }
  }
    sellDrugs() {
      this.playerMoney += this.orderProfit;
    }
    removeFromInventory() {
      for (let i = 0; i < this.drugsSold.length; i++) {
        if (this.drugsSold[i].Quantity > 0) {
          this.drugInventory[this.drugsSold[i].Drug].Quantity -= this.drugsPurchased[i].Quantity;
        }
      }
    }
}



