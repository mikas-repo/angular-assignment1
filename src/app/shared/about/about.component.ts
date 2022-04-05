import { Component, Inject, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/App.animation';
import { Leader } from 'src/app/models/leader/leader';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block'
  },
  animations:[
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

  leaders!: Leader[];

  errMess:string;

  constructor(private leaderService: LeaderService,  @Inject('BaseURL') public baseURL) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(
      (leaders)=> this.leaders = leaders,
      errmess => this.errMess = <any> errmess
      );
  }
  

}
