import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tries-counter',
  templateUrl: './tries-counter.component.html',
  styleUrls: ['./tries-counter.component.sass']
})
export class TriesCounterComponent {
  @Input() tries: any;
}
