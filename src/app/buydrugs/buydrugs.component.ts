import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'ngdw-buydrugs',
  templateUrl: './buydrugs.component.html',
  styleUrls: ['./buydrugs.component.scss']
})
export class BuydrugsComponent implements OnInit {
  
  drugstobuy = this.gameService.game.getValue().drugstobuy;
  drugtobuy: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
