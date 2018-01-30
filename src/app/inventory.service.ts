import { Injectable, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InventoryService {
  private inventorySource = new BehaviorSubject<string[]>([]);
  currentInventory = this.inventorySource.asObservable();
  constructor() { }
  changeInventory(inventory: string[]) {
    this.inventorySource.next(inventory);
  }
}
