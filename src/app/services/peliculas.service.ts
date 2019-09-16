import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = 'cc7320e81a733d5094221f78b69f218c';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';
  private jsonP :string = '&callback=JSONP_CALLBACK';

  peliculas:any[]=[];

  constructor(private http:HttpClient) { }

  buscarPeliculas(texto:string){
    const url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&query=${texto}&include_adult=false${this.jsonP}`;
    return this.http.jsonp(url,'JSONP_CALLBACK').pipe(
      map( resp=>{
        this.peliculas = resp['results'];
        // console.log(this.peliculas);
        return resp['results'];
      }
      )
    );
  }

  getCartelera(){
    const url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&page=1${this.jsonP}`;
    return this.http.jsonp(url,'JSONP_CALLBACK');
  }

  getPopulares(){
    const url = `${this.urlMoviedb}/movie/popular?api_key=${this.apikey}${this.jsonP}`;
    return this.http.jsonp(url,'JSONP_CALLBACK');
  }

   getPelicula(id:string){
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}${this.jsonP}`;
    return this.http.jsonp(url,'JSONP_CALLBACK');
  }

}
