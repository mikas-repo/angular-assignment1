import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { DishService } from 'src/app/services/dish.service';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Dish} from '../../models/dish';
import {DISHES} from '../../models/dishes';
 

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  dishIds!: string[];
  dish!:Dish;
  prev!: string;
  next!: string;

  dishes = DISHES;

  commentForm!:FormGroup;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;

  d1:Date = new Date()
  convertedDate = this.d1.toISOString().slice(0, -5)

  typing:boolean = true;

  formErrors:any = {
    'author': '',
    'comment': '',
    'date': '',
    'rating': ''
  };

  validationMessages:any = {
    'author': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
    },
    'comment': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
    },
    'rating': {
      'required':      'Tel. number is required.',
    },

  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dishService: DishService,
    private location: Location,
    private fb:FormBuilder
  ) {this.createComment()}

  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.activatedRoute.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe((dish:any) => {this.dish = dish; this.setPrevNext(dish.id); });
    
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }


  createComment(){
    this.commentForm = this.fb.group({
      author: [null, [Validators.required, Validators.minLength(5)]],
      rating:[null, [Validators.required]],
      comment:[null, [Validators.required, Validators.minLength(10)]]
    })

    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
  
   this.onValueChanged(); 
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }



  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  

  submitComment(){
    this.typing = false
    console.log(this.commentForm.value)

    const data = {
      author : this.commentForm.get('author')?.value,
      comment: this.commentForm.get('comment')?.value,
      rating :this.commentForm.get('rating')?.value,
      date: this.convertedDate
    }

    this.dishes[0].comments?.push(data);

    this.commentForm.reset({
      author:'',
      aring:'',
      comment:'',
    });
  }


}
