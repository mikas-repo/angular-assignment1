import { Injectable } from '@angular/core';
import { map, Observable, catchError} from 'rxjs';
import { Dish } from '../models/dish';
// import { DISHES } from '../models/dishes';

import { baseURL } from '../shared/baseUrl';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProcessHttpmsgService } from './process-httpmsg.service';

// Injectable allows us to inject the service with in the class
@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor(private http: HttpClient, private processHTTPMsgService:ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes').pipe(
      catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + `${id}`).pipe(
      catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0])).pipe(
      catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id))).pipe(
      catchError(this.processHTTPMsgService.handleError));
  }


  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }



  
  
}
