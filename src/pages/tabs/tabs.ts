import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'tabs-page' // importante para que recarge bien
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';

  constructor() {

  }
}
