import { Component, Inject, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/App.animation';
import { Dish } from 'src/app/models/dish';
import { Leader } from 'src/app/models/leader/leader';
import { Promotion } from 'src/app/models/promotion/promotion';
import { DishService } from 'src/app/services/dish.service';
import { LeaderService } from 'src/app/services/leader.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block'
  },
  animations:[
    flyInOut()
  ]
})
export class HomeComponent implements OnInit {

  featuredDish!: Dish;
  featuredPromotions!: Promotion;
  featuredLeadership!: Leader;

  errMess:string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public baseURL
  ) {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(
      featuredDishes=>this.featuredDish = featuredDishes, 
       errmess => this.errMess = <any>errmess
      );
    this.promotionService.getFeaturedPromotion().subscribe(
      (promo)=>this.featuredPromotions = promo,
      errmess => this.errMess = <any> errmess
      );
    this.leaderService.getFeaturedLeader().subscribe(
      featuredLeader=> this.featuredLeadership = featuredLeader,
      errmess => this.errMess = <any> errmess
      );
  }
}
