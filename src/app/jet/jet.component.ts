import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PoliceDialogComponent } from '../police-dialog/police-dialog.component';

@Component({
  selector: 'ngdw-jet',
  templateUrl: './jet.component.html',
  styleUrls: ['./jet.component.css']
})
export class JetComponent implements OnInit {

  locationNames = this.gameService.locationNames;
  destination: string;
  currentLocation = this.gameService.currentLocation;

  constructor(public gameService: GameService, public dialog: MatDialog) { }

  ngOnInit() {
    this.destination = 'New York City';
  }

  jet() {
    this.gameService.currentLocation = this.destination;
    this.gameService.tabIndex = 0;
    this.currentLocation = this.destination;
  }

  openDialog(): void {
    const policeRoll = Math.floor(Math.random() * 6);
    console.log(policeRoll);
    if (policeRoll === 5) {
      const policeDialog = this.dialog.open(PoliceDialogComponent, {
        width: '100%',
        data: {},
        disableClose: true
      });

      policeDialog.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    this.jet();
  }
}
