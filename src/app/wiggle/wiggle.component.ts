import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-wiggle',
  templateUrl: './wiggle.component.html',
  styleUrls: ['./wiggle.component.scss']
})
export class WiggleComponent implements OnInit, AfterViewInit {
  @Input() text: string;
  stringArray;

  constructor() {}

  ngOnInit(): void {
    this.stringArray = [...this.text];
  }

  ngAfterViewInit(): void {
    gsap.from(
      '.letter',
      {y: -100, stagger: 0.1, ease: 'elastic', duration: 1}
    );
  }

}
