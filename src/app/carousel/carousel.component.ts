import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-carousel', 
  templateUrl: './carousel.component.html', 
  styleUrls: ['./carousel.component.scss'] 
})
export class CarouselComponent implements OnInit {

  // Decorador @Input para recibir una lista de imágenes desde el componente padre
  @Input() images: { src: string, alt: string }[] = [];
  
  // Propiedad que mantiene el índice de la imagen actual en el carrusel
  currentIndex: number = 0;

  // Método de ciclo de vida ngOnInit que se ejecuta al inicializar el componente
  ngOnInit = () => {
    AOS.init(); // Inicializa la librería AOS para animaciones en scroll
  };

  // Método de ciclo de vida ngAfterViewInit que se ejecuta después de que la vista del componente ha sido inicializada
  ngAfterViewInit = () => {
    AOS.refresh(); // Refresca AOS para asegurarse de que las animaciones se apliquen correctamente
  };

  // Método para mostrar la imagen anterior en el carrusel
  prev = () => {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    // Si el índice actual es 0, se cambia al último índice; de lo contrario, se decrementa en 1
  };

  // Método para mostrar la siguiente imagen en el carrusel
  next = () => {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
    // Si el índice actual es el último, se cambia al primer índice; de lo contrario, se incrementa en 1
  };
}
