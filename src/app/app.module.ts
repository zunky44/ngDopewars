import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameWindowComponent, GameWindowDialogComponent } from './game-window/game-window.component';
import { AboutComponent } from './about/about.component';
import { GameService } from './game.service';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameWindowComponent,
    AboutComponent,
    InventoryComponent,
    GameWindowDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  entryComponents: [
    GameWindowDialogComponent
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
