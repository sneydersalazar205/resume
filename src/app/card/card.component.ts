import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterViewInit {

  // Propiedad de entrada para la imagen principal de la tarjeta
  @Input() imageSrc: string = '';

  // Propiedad de entrada para la imagen del encabezado
  @Input() headerImageSrc: string = '';

  // Propiedad de entrada para el título de la tarjeta
  @Input() title: string = '';

  // Propiedad de entrada para la descripción de la tarjeta
  @Input() description: string = '';

  // Propiedad de entrada para las imágenes del carrusel
  @Input() carouselImages: { src: string, alt: string }[] = [];

  // Método del ciclo de vida de Angular que se ejecuta al inicializar el componente
  ngOnInit() {
    // Inicializa la biblioteca AOS (Animate On Scroll)
    AOS.init();
  }

  // Método del ciclo de vida de Angular que se ejecuta después de que la vista ha sido inicializada
  ngAfterViewInit() {
    // Refresca las animaciones de AOS después de que la vista se haya cargado
    AOS.refresh();
  }
}
