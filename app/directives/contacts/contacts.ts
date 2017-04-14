import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'contacts-component',
  styleUrls: ['app/directives/contacts/contacts.css'],
  templateUrl:'/app/directives/contacts/contacts.tmpl.html',
})

export class ContactsComponent {
  constructor(public element: ElementRef) {

  }

  lat: number = 49.2340115;
  lng: number = 28.4485162;

  contactMap : boolean = true;
  contactCar : boolean = false;
  contactBus : boolean = false;
  contactBike : boolean = false;
  contactPhone : boolean = false;
  contactMail : boolean = false;
  resetState(){
    this.contactMap = false;
    this.contactCar = false;
    this.contactBus = false;
    this.contactBike = false;
    this.contactPhone = false;
    this.contactMail = false;
  }
  mapClick(){
    this.resetState();
    this.contactMap = true;
  }
  carClick(){
    this.resetState();
    this.contactCar = true;
  }
  busClick(){
    this.resetState();
    this.contactBus = true;
  }
  bikeClick(){
    this.resetState();
    this.contactBike = true;
  }
  phoneClick(){
    this.resetState();
    this.contactPhone = true;
  }
  mailClick(){
    this.resetState();
    this.contactMail = true;
  }


  setPosition(position:any){
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }
  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
  }

}
