export class AppareilService{

  appareils = [
    { name: 'Machine à laver',
      status: 'allumé'},
    { name: 'Box',
      status: 'éteint'},
    { name: 'Télévision',
      status: 'éteint'}
  ];
  
  switchOnAll(){
    
    for(const appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }
  switchOffAll(){

    for(const appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOn(i: number){
    this.appareils[i].status = 'allumé';
  }
  switchOff(i: number){
    this.appareils[i].status = 'éteint';
  }
}
