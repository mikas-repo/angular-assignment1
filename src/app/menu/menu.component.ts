import { Component, Inject, OnInit, inject} from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  dishes: Dish[]=[];
  
  constructor(private dishService:DishService, @Inject('baseUrl') private baseUrl) {}

  ngOnInit(): void {
      this.dishService.getDishes().subscribe((dishes:any) => this.dishes = dishes);
  }

}
