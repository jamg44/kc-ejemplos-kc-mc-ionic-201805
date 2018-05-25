import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../providers';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie: Movie;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.movie = this.navParams.get('movie');
    console.log('recibo movie:', this.movie);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

}
