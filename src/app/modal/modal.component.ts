import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal', 
  templateUrl: './modal.component.html', 
  styleUrls: ['./modal.component.scss'] 
})
export class ModalComponent {
  // Propiedad que controla el estado de visibilidad del modal
  isModalOpen: boolean = false;

  // Método para alternar el estado de visibilidad del modal
  toggleModal() {
    this.isModalOpen = !this.isModalOpen; // Invierte el valor de isModalOpen (true a false y viceversa)
  }
}

