import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projektek',
  templateUrl: './projektek.component.html',
  styleUrls: ['./projektek.component.css']
})
export class ProjektekComponent implements OnInit {

  projects= [
    {
      title:'Projekt 1',
      content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en d'
    },
        {
      title:'Projekt 2',
      content:'Lorem Ipsum es siido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en d'
    },
        {
      title:'Projekt 3',
      content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en d' +
       'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en d'
    },
        {
      title:'Projekt 4',
      content:'Lorem Ipsum es simplemenó como texto de relleno en d'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

  scroll(el) {
    el.scrollIntoView();
}

  openProject(event){
    console.log(event.srcElement.classList)
   event.srcElement.classList.toggle("active");
    var panel = event.toElement.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
