import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrl: './scroll-spy.component.scss'
})
export class ScrollSpyComponent implements  OnInit, AfterViewInit {

  isNavbarCollapsed = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('scrolling');

    // lógica para mantener los eventos de desplazamiento por scroll
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition = scrollPosition + 100;
    const sections: any = document.querySelectorAll('.section');

    sections.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition) {
        let navLinks: any = document.querySelectorAll('.navbar a');
        navLinks.forEach((link: HTMLAnchorElement) => {
          if (link.href.includes(section.id)) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        console.log(section.id);
      }
    });
  }

  carouselImages = [
    { src: 'https://via.placeholder.com/600x400?text=Slide+1', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3' }
  ];

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    AOS.refresh();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = false;
  }
}
