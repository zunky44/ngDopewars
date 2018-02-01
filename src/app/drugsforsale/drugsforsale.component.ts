import { Component, OnInit } from '@angular/core';
import { Drug } from '../drug';

@Component({
  selector: 'ngdw-drugsforsale',
  templateUrl: './drugsforsale.component.html',
  styleUrls: ['./drugsforsale.component.css']
})

export class DrugsforsaleComponent implements OnInit {

  displayedColumns = ['name', 'price'];
  drugsforsale = DRUG_DATA;
  constructor() { }

  ngOnInit() {
  }

}

const DRUG_DATA: Drug[] = [
  {name: 'Weed', price: 23},
  {name: 'Weed', price: 2234},
  {name: 'Weed', price: 267},
  {name: 'Weed', price: 212},
  {name: 'Weed', price: 2423},
  {name: 'Weed', price: 243},
  {name: 'Weed', price: 56},
];
