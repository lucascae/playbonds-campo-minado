import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  constructor(private boardService: BoardService) {}

  @Input() position: any;
  @Input() cellValue: any;
  @Input() cellDisable: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();

  showCell(id: any, cellValue: any) {
    const cell = document.getElementById(id) as HTMLElement;
    cell.classList.add('cell-flip');
    cell.setAttribute('disabled', 'disabled')
    this.useTry(cellValue)
  }

  useTry(value: string){
    this.newItemEvent.emit(value)
  }
}
