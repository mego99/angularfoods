import { Component, Input } from '@angular/core'; //importing decorator

import { Food } from './food';

@Component({ //using decorator here!
  selector: 'my-food-detail',
  template: `
  <div *ngIf="food">
    <h2>{{food.name}} details!</h2>
    <div><label>id: </label>{{food.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="food.name" placeholder="name"/>
    </div>
  </div>
  `
})
export class FoodDetailComponent {
  @Input()
  food: Food;
}
