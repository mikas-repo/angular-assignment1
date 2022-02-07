import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish!:Dish;

  constructor(private activatedRoute:ActivatedRoute,
              private dishService:DishService,
              private location:Location) { }


  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
     this.dishService.getDish(id).then((dish)=>this.dish = dish);
  }

  goBack():void{
    this.location.back();
  }

}
