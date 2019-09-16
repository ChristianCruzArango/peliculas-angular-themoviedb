import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculasapp';

  constructor(private _pServices:PeliculasService){
    // this._pServices.getPopulares().subscribe(console.log);
  // this._pServices.buscarPeliculas('batman').subscribe(console.log);
  }
}
