import { Component, OnInit } from '@angular/core';
import { Leader } from 'src/app/models/leader/leader';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders!: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe((leaders)=> this.leaders = leaders);
  }
  

}
