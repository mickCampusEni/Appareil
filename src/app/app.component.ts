import {Component, OnInit} from '@angular/core';
import {promise} from 'selenium-webdriver';
import {AppareilComponent} from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

}
