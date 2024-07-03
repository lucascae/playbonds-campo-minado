import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { BoardService } from '../services/board.service';
import { PrizesComponent } from './prizes/prizes.component';
import { TriesCounterComponent } from './tries-counter/tries-counter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    CardComponent,
    PrizesComponent,
    TriesCounterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
