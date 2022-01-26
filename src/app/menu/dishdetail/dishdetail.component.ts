import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  constructor() { }
  @Input() dish!:Dish;

  ngOnInit(): void {
  }

}
