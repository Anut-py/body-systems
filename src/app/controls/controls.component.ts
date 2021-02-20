import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Input() animation: TweenLite | TweenMax | TimelineLite | TimelineMax;
  @Input() width = 0;

  get paused(): boolean {
    return this.animation?.paused() || false;
  }

  constructor() {
  }

}
