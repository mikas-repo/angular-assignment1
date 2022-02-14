import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { DishService } from 'src/app/services/dish.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  dish!: Dish;
  dishIds!: string[];
  prev!: string;
  next!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dishService: DishService,
    private location: Location
  ) {}

  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.activatedRoute.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe((dish:any) => {dish = dish; this.setPrevNext(dish.id); });
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  
}
