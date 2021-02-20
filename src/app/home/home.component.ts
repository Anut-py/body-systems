import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {gsap} from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  smallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe('(max-width: 625px)')
      .subscribe((res) => (this.smallScreen = res.matches));
  }

  ngOnInit(): void {
    const tl = gsap.timeline();
    tl.addLabel('start')
      .from('.left,.right,.bottom', {
        duration: 1.5,
        ease: 'power4.out',
        x: (index: number, target: HTMLElement) => {
          if (target.classList.contains('left')) {
            return -300;
          } else if (target.classList.contains('right')) {
            return 300;
          } else {
            return 0;
          }
        },
        y: (index: number, target: HTMLElement) => {
          if (target.classList.contains('bottom')) {
            return 100;
          } else {
            return 0;
          }
        },
      })
      .from(
        '.dashboard-card-content',
        {
          duration: 0.75,
          ease: 'power2.in',
          opacity: 0,
        },
        'start'
      );
  }
}
