import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Drug } from '../drug';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements AfterViewInit {

  displayedColumns = ['name', 'price'];
  dataSource = new MatTableDataSource<Drug>(DRUG_DATA);
  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

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
