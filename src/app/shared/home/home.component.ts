import { Component, OnInit } from '@angular/core';
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
    private leaderService: LeaderService
  ) {}

  ngOnInit(): void {
    this.featuredDish = this.dishService.getFeaturedDish();
    this.featuredPromotions = this.promotionService.getFeaturedPromotion();
    this.featuredLeadership = this.leaderService.getFeaturedLeader();
  }
}
