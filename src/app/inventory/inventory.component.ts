import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'ngdw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventory: string[];

  constructor(private inventoryData: InventoryService) { }


  ngOnInit() {
    this.inventoryData.currentInventory.subscribe(inventory => this.inventory = inventory);
  }
}
