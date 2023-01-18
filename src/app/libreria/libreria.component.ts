import { Component } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent {

  arrayLibros: any[] = [{
    title: 'El gato con botas',
    autor: 'Manuel Perez',
    imgUrl: 'https://pixeldigitalcinema.com/wp-content/uploads/2022/11/El-gato-con-botas.jpg',
  },{
    title: 'Caperucita Roja',
    autor: 'Abilio Perez',
    imgUrl: 'https://www.etapainfantil.com/wp-content/uploads/2016/01/Caperucita-Roja-cuento-corto-e1454154924276-700x482.jpg',
  },{
    title: 'Shrek',
    autor: 'Benancio Calleja',
    imgUrl: 'https://cdn.sincroguia.tv/uploads/programs/s/h/r/shrek-poster-8165_SPA-93_V.jpg',
  }];

  addLibro(libro: any){
    this.arrayLibros = [...this.arrayLibros, libro];
}
}
