import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  
  // Propiedad de entrada que recibe una lista de objetos de imagen desde el componente padre
  @Input() images: { src: string, alt: string, description: string }[] = [];
  
  // Índice actual de la imagen mostrada en el carrusel
  currentIndex: number = 0;

  // Identificador del intervalo para el auto deslizamiento de las imágenes
  autoSlideInterval: any;

  // Método del ciclo de vida ngOnInit que se ejecuta cuando el componente se inicializa
  ngOnInit() {
    // Inicializa la biblioteca AOS (Animate On Scroll)
    AOS.init();
    // Inicia el auto deslizamiento del carrusel
    this.startAutoSlide();
  }

  // Método del ciclo de vida ngAfterViewInit que se ejecuta después de que la vista ha sido inicializada
  ngAfterViewInit() {
    // Refresca las animaciones de AOS para asegurar que se apliquen correctamente
    AOS.refresh();
  }

  // Método del ciclo de vida ngOnDestroy que se ejecuta cuando el componente se destruye
  ngOnDestroy() {
    // Detiene el auto deslizamiento del carrusel
    this.stopAutoSlide();
  }

  // Inicia el auto deslizamiento de las imágenes del carrusel
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      // Muestra la siguiente imagen del carrusel
      this.next();
    }, 6000); // Cambia de imagen cada 6 segundos
  }

  // Detiene el auto deslizamiento de las imágenes del carrusel
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Muestra la imagen anterior en el carrusel
  prev() {
    // Detiene el auto deslizamiento temporalmente
    this.stopAutoSlide();
    // Actualiza el índice de la imagen actual
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    // Reinicia el auto deslizamiento
    this.startAutoSlide();
  }

  // Muestra la siguiente imagen en el carrusel
  next() {
    // Detiene el auto deslizamiento temporalmente
    this.stopAutoSlide();
    // Actualiza el índice de la imagen actual
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
    // Reinicia el auto deslizamiento
    this.startAutoSlide();
  }
}
