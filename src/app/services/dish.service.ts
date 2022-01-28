import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';
import { DISHES } from '../models/dishes';

// Injectable allows us to inject the service with in the class
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  
  getDishes():Dish[]{
    return DISHES;
  }

  getDish(id:string):Dish{
    return DISHES.filter((dish)=>(dish.id===id))[0];
  }
  
  getFeaturedDish():Dish{
    return DISHES.filter((dish)=> dish.featured)[0];
  }
}
