import {Component, OnInit} from '@angular/core';
import {promise} from 'selenium-webdriver';
import {AppareilComponent} from './appareil/appareil.component';
import {AppareilService} from './services/Appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isAuth = false;
  appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });



  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }

  ngOnInit(): void {
      this.appareils = this.appareilService.appareils;
  }

  onAllumerTout(){

    this.appareilService.switchOnAll();
  }

  onEteindreTout(){

    if(confirm('Valider tout éteindre ?')){
      this.appareilService.switchOffAll();
    }
    else{
      return null;
    }


  }

}
