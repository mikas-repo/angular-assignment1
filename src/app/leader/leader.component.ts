import { Component, Input, OnInit } from '@angular/core';
import { Leader } from '../models/leader/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {

  @Input() leaders!:Leader[];

  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
  }

}
