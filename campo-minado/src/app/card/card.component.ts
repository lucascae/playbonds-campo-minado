import { Component, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private boardService: BoardService){}

  @Input() showCard: any;
  message = '';
  title = '';
  icon = '';

  ngAfterContentChecked(): void {
    if(this.showCard == 1){this.title = 'Tesouro!'; this.message = 'Você ganhou bônus para jogos - $10', this.icon = '../../assets/images/diamond-tile.jpg'}
    if(this.showCard == 2){this.title = 'Moedas!'; this.message = 'Você ganhou Freebet sports - $20', this.icon = '../../assets/images/coin-tile.jpg'}
    if(this.showCard == 3){this.title = 'Passe livre!'; this.message = 'Você ganhou FreeTicket para comprar na sala de bingo', this.icon = '../../assets/images/ticket-tile.jpg'}
    if(this.showCard == 4){this.title = 'Boooom!'; this.message = 'Tome mais cuidado da próxima vez', this.icon = '../../assets/images/bomb-tile.jpg'}
  }

  closeModal() { this.showCard = 0 }
}
