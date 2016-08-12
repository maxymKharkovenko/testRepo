import {Component, Input} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {ContentChildren} from 'angular2/core';
import {QueryList} from 'angular2/core';
import {Directive} from 'angular2/core';


@Directive({ selector: 'li' })
export class ListItem {}


@Component({
    selector: 'users',
    inputs: ['collection'],
    templateUrl: '/app/directives/templates/users.tmpl.html',
})



/*
export class Engine {
    public cylinders = 4; // default
}
export class Engine2 {
    constructor(public cylinders: number) { }
}
export class Tires {
    public make  = 'Flintstone';
    public model = 'Square';
}

export class Car {
    constructor(public engine: Engine, public tires: Tires) { }
}


class MockEngine extends Engine { cylinders = 8; }
class MockTires  extends Tires  { make = "YokoGoodStone"; }

let car = new Car(new Engine(), new Tires());
let supercar = new Car(new Engine2(12), new Tires());
var mockCar = new Car(new MockEngine(), new MockTires());
*/


export class UsersComponent {

    @ContentChildren(ListItem) items: QueryList<ListItem>;

    private isShowCollection = false;

    constructor(el: ElementRef) {
        el.nativeElement.querySelector('input').focus();
    }


    showAllUsers(){
        this.isShowCollection = !this.isShowCollection;
    }

}