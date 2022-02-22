import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Dish } from '../models/dish';
import { DISHES } from '../models/dishes';

import { baseUrl } from '../shared/baseUrl';

import { HttpClient } from '@angular/common/http';



// Injectable allows us to inject the service with in the class
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient) { }
  
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseUrl + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseUrl + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseUrl + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
  
  
  
}
