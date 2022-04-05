import { Component, Inject, OnInit } from '@angular/core';
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
})
export class HomeComponent implements OnInit {
  featuredDish!: Dish;
  featuredPromotions!: Promotion;
  featuredLeadership!: Leader;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL
  ) {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(featuredDishes=>this.featuredDish = featuredDishes);
    this.promotionService.getFeaturedPromotion().then((promo)=>this.featuredPromotions = promo);
    this.leaderService.getFeaturedLeader().subscribe(featuredLeader=> this.featuredLeadership = featuredLeader);
  }
}
