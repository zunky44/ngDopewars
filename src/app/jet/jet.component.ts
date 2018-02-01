import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'ngdw-jet',
  templateUrl: './jet.component.html',
  styleUrls: ['./jet.component.css']
})
export class JetComponent implements OnInit {

  locations = this.gameService.game.getValue().locations;
  destination: string;
  currentLocation = this.gameService.game.getValue().currentLocation;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.game.subscribe();
    this.destination = 'New York City';
  }

  jet() {
    this.gameService.game.getValue().currentLocation = this.destination;
    this.gameService.game.getValue().tabIndex = 0;
    this.currentLocation = this.destination;
  }

}
