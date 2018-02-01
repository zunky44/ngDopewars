import { Component, OnInit } from '@angular/core';
import { Drug } from '../drug';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  drugsinventory = DRUG_DATA;
  displayedColumns = ['name', 'price'];
  constructor() { }

  ngOnInit() {}
}




const DRUG_DATA: Drug[] = [
  {name: 'Weed', price: 23},
  {name: 'Weedwwwwwwwwwww', price: 2234},
  {name: 'Weed', price: 267},
  {name: 'Weed', price: 212},
  {name: 'Weed', price: 2423},
  {name: 'Weed', price: 243},
  {name: 'Weed', price: 56},
];
