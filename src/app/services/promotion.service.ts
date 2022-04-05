import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Promotion } from '../models/promotion/promotion';
// import { PROMOTIONS } from '../models/promotion/promotions/promotions';
import { baseURL } from '../shared/baseUrl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient, private processHTTPMsgService:ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]>{
    return this.http.get<Promotion[]>(baseURL + 'promotions/').pipe(
      catchError(this.processHTTPMsgService.handleError)
    );
  }

  getPromotion(id:string): Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'dishes/' + id).pipe(
      catchError(this.processHTTPMsgService.handleError)
    );
  }
  
  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0])).pipe(
      catchError(this.processHTTPMsgService.handleError));
  }


}
