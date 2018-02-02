import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'ngdw-currentlocation',
  templateUrl: './currentlocation.component.html',
  styleUrls: ['./currentlocation.component.css']
})
export class CurrentlocationComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }
}
