import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'resume';

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
  // Aquí se definen los objetos de contenido para los perfiles
  cardContentPaola = {
    imageSrc: 'assets/perfil-paola.jpeg',
    headerImageSrc: 'https://via.placeholder.com/50',
    title: 'Jessica Paola Peña Peña',
    description: 'Solution Consultant II, Bogotá    Proyecto: TIGO <br />Cuento con amplia experiencia en pruebas de calidad de software, con capacidad de realizar diseño de plan de pruebas, definición y generación de casos de prueba de acuerdo a los requisitos funcionales, no funcionales y técnicos.Ejecución de casos de pruebas, análisis y planteamiento de estrategias para la ejecución de los casos de prueba.  ',
    carouselImages: [
      { src: 'assets/jira-3.svg', alt: 'jira', description: 'Jira' },
    { src: 'assets/azure-1.svg', alt: 'Azure', description: 'Azure' },
    { src: 'assets/mantis.png', alt:'mantis', description: 'Mantis' },
    { src: 'assets/sharepoint.svg', alt:'Sharepoint', description: 'Sharepoint' },
    { src: 'assets/soapui.svg', alt:'Soapui', description: 'Soap ui' },
    { src: 'assets/postman.svg', alt:'Postman', description: 'Postman' },
    { src: 'assets/oracle.svg', alt:'Oracle', description: 'Oracle' },
    { src: 'assets/pgadmin.svg', alt:'pgadmin', description: 'pg admin' },
    { src: 'assets/docker.svg', alt:'Docker', description: 'Docker' },
    ],
  };

  cardContentCarlos = {
    imageSrc: 'assets/perfil-carlos.jpeg',
    headerImageSrc: 'https://via.placeholder.com/50',
    title: 'Carlos Alberto Rodriguez Cardenas',
    description: 'Analista de sistemas , Soy Estudiante de ingeniería de sistemas, titulado en técnico en sistemas y mantenimiento de computadores experiencia en consecución de objetivos, liderazgo, trabajo en equipo, alta capacidad de innovación, comunicación y diseño e implementación de Sistemas de Información, con amplios conocimientos en sistemas operativos Windows, Mac, Server, aplicaciones ofimáticas, ciberseguridad, bases de datos, configuración de redes, administración de directorio activo, Firewall, soporte remoto, alistamiento de equipos, telefonía, impresoras. Con capacidad competente y oportuna para desempañarme en cualquier cargo asignado.  ',
    carouselImages: [
    { src: 'assets/redes.png', alt: 'redes', description: ' Manejo de redes y servidores' },
    { src: 'assets/soportetecnico.png', alt: 'soporte tecnico', description: 'Soporte tecnico' },
    { src: 'assets/mesa.png', alt:'mesa de ayuda', description: 'Mesa de ayuda' },
    { src: 'assets/instalacion.png', alt:'instalacion', description: ' Soporte a los aplicativo de notícias' }
    ]
  };

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

  // Variables y métodos para el menú flotante (floating-button)
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.floating-button')) {
      this.isMenuOpen = false;
    }
  }
}
