import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';  // Importación de la librería de animaciones AOS

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrl: './scroll-spy.component.scss'
})
export class ScrollSpyComponent implements OnInit, AfterViewInit {
  
  // Variable para controlar si el navbar está colapsado
  isNavbarCollapsed = true;

  // Variable para controlar si el modal está visible
  isModalVisible: boolean = false;

  // Decorador HostListener para escuchar eventos de desplazamiento en la ventana
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('scrolling');  // Log para indicar que se está detectando el scroll

    // Obtener la posición de scroll actual
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition = scrollPosition + 100;  // Ajustar la posición de scroll si es necesario
    const sections: any = document.querySelectorAll('.section');  // Seleccionar todas las secciones

    // Iterar sobre cada sección para comprobar cuál está en la vista
    sections.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition) {
        
        // Obtener todos los enlaces del navbar
        let navLinks: any = document.querySelectorAll('.navbar a');
        
        // Añadir o eliminar la clase 'active' según la sección visible
        navLinks.forEach((link: HTMLAnchorElement) => {
          if (link.href.includes(section.id)) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        console.log(section.id);  // Log de la sección actual
      }
    });
  }

  // Lista de imágenes para el primer carrusel
  carouselImages = [
    { src: 'https://via.placeholder.com/600x400?text=Slide+1', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3' }
  ];

  // Lista de imágenes para el segundo carrusel
  carouselImages1 = [
    { src: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-modo-enfoque_114360-6949.jpg?w=900&t=st=1717035168~exp=1717035768~hmac=e075d456220e9715dcc019ab95913e5546faf6f35f74ae47d8eca044927d56c3', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3' }
  ];

  // Método del ciclo de vida OnInit para inicializar AOS
  ngOnInit() {
    AOS.init();
  }

  // Método del ciclo de vida AfterViewInit para refrescar AOS
  ngAfterViewInit() {
    AOS.refresh();
  }

  // Método para alternar el estado colapsado del navbar
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // Método para cerrar el navbar
  closeNavbar() {
    this.isNavbarCollapsed = false;
  }
}
