import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

 @Input() appareilName: string;
 @Input() appareilStatus: string;
 @Input() index: number;

  constructor(private appareilService: AppareilService) { }
  ngOnInit() {
  }

  onSwitch(){

    if(this.appareilStatus === 'allumé'){
      this.appareilService.switchOff(this.index);
    }
    else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOn(this.index);
    }
  }
  getColor(){

    if(this.appareilStatus === 'allumé'){
      return 'green';
    }
    else{
      return 'red';
    }
  }
}
