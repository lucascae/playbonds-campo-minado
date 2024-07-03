import { Component, EventEmitter, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  restarGame(value: any){
    this.newItemEvent.emit(value)
  }
}

