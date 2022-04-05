import { Component, Inject, OnInit} from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../services/dish.service';

import { flyInOut } from '../animations/App.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block'
  },
  animations:[
    flyInOut
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[]=[];

  errMess:string;
  
  constructor(private dishService:DishService, @Inject('BaseURL') public baseURL) {}

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }

}
