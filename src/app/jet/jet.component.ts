import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'ngdw-jet',
  templateUrl: './jet.component.html',
  styleUrls: ['./jet.component.css']
})
export class JetComponent implements OnInit {

  locations = this.gameService.locations;
  destination: string;
  currentLocation = this.gameService.currentLocation;

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.destination = 'New York City';
  }

  jet() {
    this.gameService.currentLocation = this.destination;
    this.gameService.tabIndex = 0;
    this.currentLocation = this.destination;
  }

}
