import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.scss']
})
export class NuevoLibroComponent {

  @Output() newLibro = new EventEmitter();

  addLibro(libro: any){
    console.log(libro)
    this.newLibro.emit(libro);
  }

}
