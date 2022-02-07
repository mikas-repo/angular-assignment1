import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion/promotion';
import { PROMOTIONS } from '../models/promotion/promotions/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id:string): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=>(promo.id === id))[0]);
  }
  
  getFeaturedPromotion(): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=> promo.featured)[0]);
  }
}
