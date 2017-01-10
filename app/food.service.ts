import { Injectable } from '@angular/core';

import { Food } from './food';
import { FOODS } from './mock-foods';


@Injectable()

export class FoodService {
  getFoods(): Promise<Food[]> {
    return Promise.resolve(FOODS);
  }
}
