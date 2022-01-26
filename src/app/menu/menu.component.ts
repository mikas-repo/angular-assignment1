import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/dish';

import {DISHES} from '../models/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;
  selectedDish!:Dish;
  constructor() {}

  ngOnInit(): void {}

  onSelect(dish:Dish){
    this.selectedDish = dish;
  }
}
