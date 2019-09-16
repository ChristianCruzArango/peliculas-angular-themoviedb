import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;

  constructor(private dbServices:PeliculasService) {
    this.dbServices.getCartelera().subscribe(data=>this.cartelera = data['results']);
    this.dbServices.getPopulares().subscribe(data=>this.populares = data['results'])
  }

  ngOnInit() {

  }

}
