export class AppareilService{

  appareils = [
    { id: 1,
      name: 'Machine à laver',
      status: 'allumé'},
    { id: 2,
      name: 'Box',
      status: 'éteint'},
    { id: 3,
      name: 'Télévision',
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

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}
