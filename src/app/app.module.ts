import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { AboutComponent } from './about/about.component';
import { GameService } from './game.service';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatGridListModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { MatButtonModule,
          MatCardModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatInputModule,
          MatTabsModule,
          MatListModule,
          MatRadioModule,
          MatDividerModule,
          MatSortModule } from '@angular/material';
import { JetComponent } from './jet/jet.component';
import { CurrentlocationComponent } from './currentlocation/currentlocation.component';
import { StatsComponent } from './stats/stats.component';
import { LocationinfoComponent } from './locationinfo/locationinfo.component';
import { DrugsforsaleComponent } from './drugsforsale/drugsforsale.component';
import { TablesComponent } from './tables/tables.component';
import { SelldrugsComponent } from './selldrugs/selldrugs.component';
import { BuydrugsComponent } from './buydrugs/buydrugs.component';
import {PendingChangesGuard} from './guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PoliceDialogComponent } from './police-dialog/police-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameWindowComponent,
    AboutComponent,
    InventoryComponent,
    JetComponent,
    CurrentlocationComponent,
    StatsComponent,
    LocationinfoComponent,
    DrugsforsaleComponent,
    TablesComponent,
    SelldrugsComponent,
    BuydrugsComponent,
    PoliceDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    FlexLayoutModule
  ],
  entryComponents: [
    PoliceDialogComponent,
    JetComponent,
    BuydrugsComponent,
    DrugsforsaleComponent,
    InventoryComponent,
    SelldrugsComponent
  ],
  providers: [GameService, PendingChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
