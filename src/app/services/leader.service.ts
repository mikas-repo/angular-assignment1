import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Leader } from '../models/leader/leader';
import { LEADERS } from '../models/leader/leaders/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS);
  }

  getLeader(id:string): Observable<Leader>{
    return of(LEADERS.filter((leader)=>(leader.id === id))[0]);
  }

  getFeaturedLeader(): Observable<Leader>{
    return of(LEADERS.filter((leader)=>leader.featured)[0]);
  }
  
}
