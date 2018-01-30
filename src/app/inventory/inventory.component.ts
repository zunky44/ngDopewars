import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventory: string[];

  constructor() { }

  ngOnInit() {
  }
}
