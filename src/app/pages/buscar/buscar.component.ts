import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:string = "";


  constructor(public _pservices:PeliculasService,private router:ActivatedRoute) {
    this.router.params.subscribe(parametros=>{
     if(parametros['texto']){
       this.buscar=parametros['texto'];
       this.buscarPelicula();
     }
    });
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;``
    }

    this._pservices.buscarPeliculas(this.buscar).subscribe()
  }

}
