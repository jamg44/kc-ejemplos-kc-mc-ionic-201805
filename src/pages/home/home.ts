import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { Api, Movie } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Movie[];

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public appCtrl: App
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad home');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter home');
    this.loadMoviesList();
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave home');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload home');
  }

  loadMoviesList() {
    const $movies = this.api.getMovies();

    $movies.subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    }, err => {
      console.log(err);
    });

    return $movies;
  }

  doRefresh($event) {
    this.loadMoviesList().subscribe( movies => {
      $event.complete();
    });
  }

  goToMovieDetail(movie) {
    console.log(movie);
    this.navCtrl.push('MovieDetailPage', {
      movie: movie
    });
  }

  pruebaNav() {
    // navega poniendo en el stack de páginas
    //this.navCtrl.push('MovieDetailPage');

    // navega poniendo como la primera o raiz
    //this.navCtrl.setRoot('MovieDetailPage');

    // navega poniendo en el stack del rootNav
    //this.appCtrl.getRootNav().push('MovieDetailPage');

    // navega en el rootNav (sin tabs) sin vuelta
    this.appCtrl.getRootNav().setRoot('MovieDetailPage');
  }

}
