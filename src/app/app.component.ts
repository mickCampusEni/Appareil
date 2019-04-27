import { Component } from '@angular/core';
import {promise} from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
      { name: 'Machine à laver',
        status: 'allumé'},
      { name: 'Box',
        status: 'éteint'},
      { name: 'Télévision',
        status: 'éteint'}
    ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }
  onAllumerTout(){
    console.log('Tout allumer ');
    for (const a of this.appareils){
      a.status = 'allumé';
    }
  }
}
