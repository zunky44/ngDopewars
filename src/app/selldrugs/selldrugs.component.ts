import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'ngdw-selldrugs',
  templateUrl: './selldrugs.component.html',
  styleUrls: ['./selldrugs.component.scss']
})
export class SelldrugsComponent implements OnInit {
  drugstosell = this.gameService.game.getValue().drugstosell;
  drugtosell: string;
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
