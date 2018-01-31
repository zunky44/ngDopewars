import { Component, ViewChild } from '@angular/core';
// import { Drug } from '../drug';
import { MatTableDataSource, MatSort } from '@angular/material';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventory: string[];
  displayedColumns = ['name', 'price'];
  dataSource = new MatTableDataSource<Drug>(DRUG_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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

export interface Drug {
  name: string;
  price: number;
}
