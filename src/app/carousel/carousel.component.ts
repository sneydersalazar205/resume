import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  @Input() images: { src: string, alt: string }[] = [];
  currentIndex: number = 0;

  ngOnInit = () => {
    AOS.init();
  };

  ngAfterViewInit = () => {
    AOS.refresh();
  };

  prev = () => {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  };

  next = () => {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  };
}
