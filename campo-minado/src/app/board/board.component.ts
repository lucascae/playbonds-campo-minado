import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  constructor(private boardService: BoardService) {}

  gameTitle: string = 'BombSwipper';
  board: string[][] = [];
  rows: number = 10;
  cols: number = 10;
  aCount = 5;
  bCount = 5;
  cCount = 5;
  dCount = 25;
  tries = 5;
  showCard: any;

  ngOnInit(): void {
    this.initializeBoard();
  }

  initializeBoard(): void {
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill(''));
    this.fillBoardRandomly('1', this.aCount);
    this.fillBoardRandomly('2', this.bCount);
    this.fillBoardRandomly('3', this.cCount);
    this.fillBoardRandomly('4', this.dCount);
    this.fillRemainingPositions('0');
  }

  getRandomPosition(): [number, number] {
    const row = Math.floor(Math.random() * this.rows);
    const col = Math.floor(Math.random() * this.cols);
    return [row, col];
  }

  fillBoardRandomly(value: string, count: number): void {
    let filled = 0;
    while (filled < count) {
      const [row, col] = this.getRandomPosition();
      if (this.board[row][col] === '') {
        this.board[row][col] = value;
        filled++;
      }
    }
  }

  fillRemainingPositions(value: string): void {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.board[row][col] === '') {
          this.board[row][col] = value;
        }
      }
    }
  }

  getBoard(){
    this.boardService.getData().subscribe(
      res => {
        if(res !== null){
          this.rows = res.configurations.rows
          this.cols = res.configurations.cols
        }
      },
      err => {alert('Não foi possível iniciar o jogo')}
    );
  }

  // RULES
  // 0 - Nada
  // 1 - Bonus 1
  // 2 - Bonus 2
  // 3 - Bonus 3
  // 4 - Bomba
  // 5 - Tentativas

  useTry(value: any){
    this.tries--
    if(value == 4) {
      this.tries = 0
      this.showCard = 4
      return
    }
    this.showCard = value
  }

  restarGame(){
    this.initializeBoard();
    this.tries = 5;
  }
}
