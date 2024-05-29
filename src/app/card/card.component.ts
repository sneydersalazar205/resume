import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() imageSrc: string = '';
  @Input() headerImageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() carouselImages: { src: string, alt: string }[] = [];

  ngOnInit = () => {
    AOS.init();
  };

  ngAfterViewInit = () => {
    AOS.refresh();
  };
}
