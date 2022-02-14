import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Dish } from '../models/dish';
import { DISHES } from '../models/dishes';

// Injectable allows us to inject the service with in the class
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish:any) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
  
  
}
