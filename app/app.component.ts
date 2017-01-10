import { Component } from '@angular/core';

export class Food {
  id: number;
  name: string;
}

const FOODS: Food[] = [
  { id: 11, name: 'pasta' },
  { id: 12, name: 'pizza' },
  { id: 13, name: 'lemons' },
  { id: 14, name: 'salad' },
  { id: 15, name: 'soda' },
  { id: 16, name: 'water' },
  { id: 17, name: 'pie' },
  { id: 18, name: 'ice cream' },
  { id: 19, name: 'candy' },
  { id: 20, name: 'waffles' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My foods</h2>
  <ul class="heroes">
    <li
    *ngFor="let food of foods"
    (click)="onSelect(food)"
    [class.selected] = "food === selectedFood" > 
      <span class="badge">{{food.id}}</span> {{food.name}}
    </li>
  </ul>
  <div *ngIf="selectedFood">
    <h2>{{selectedFood.name}} details!</h2>
    <div><label>id: </label>{{selectedFood.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedFood.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]
})

export class AppComponent  {
  title = 'The Pantry';
  foods = FOODS;
  selectedFood: Food;
  onSelect(food: Food): void {
    this.selectedFood = food;
  }
}
