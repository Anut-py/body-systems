import {AfterViewInit, Component} from '@angular/core';
import {gsap} from 'gsap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements AfterViewInit {
  boxAnimation;
  secondAnimation;
  nums = [...Array(112).keys()];

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    gsap.from('.mat-stepper-horizontal', {
      x: -300,
      duration: 1.5,
      ease: 'power4.out',
    });
    this.boxAnimation = gsap.from('.box', {y: -100, ease: 'bounce', duration: 2, stagger: 0.2}).paused(true);
    this.secondAnimation = gsap.from('.box1', {y: -100, ease: 'bounce', duration: 2, stagger: 0.2}).paused(true);
  }

  goHome(): void {
    this.router.navigate(['home']);
  }

  wave(index: number): void {
    gsap.timeline().addLabel('start').to('.circle-' + index, {
      duration: 0.5,
      borderColor: 'red',
      yoyo: true,
      repeat: 1
    }).to('.circle', {
      scale: 1.5,
      duration: 0.3,
      y: -10,
      stagger: {
        yoyo: true,
        repeat: 1,
        amount: 1.25,
        grid: 'auto',
        from: index
      }
    }, 'start');
  }

}
