import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from '../game.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'ngdw-selldrugs',
  templateUrl: './selldrugs.component.html',
  styleUrls: ['./selldrugs.component.scss']
})
export class SelldrugsComponent implements OnInit {
  drugtosell: string;
  constructor(private gameService: GameService, public selldrugsDialog: MatDialogRef<SelldrugsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onCloseClick(): void {
    this.selldrugsDialog.close();
  }


}
