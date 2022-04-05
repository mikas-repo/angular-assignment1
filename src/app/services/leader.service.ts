import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Leader } from '../models/leader/leader';
import { LEADERS } from '../models/leader/leaders/leaders';
import { baseURL } from '../shared/baseUrl';
import { ProcessHTTPMsgService } from './process-msg-service.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient, private processHTTPMsgService:ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL + 'leadership/').pipe(
      catchError(this.processHTTPMsgService.handleError)
    );
  }


  getLeader(id:string): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leadership/' + id).pipe(
      catchError(this.processHTTPMsgService.handleError)
    );
  }


  getFeaturedLeader(): Observable<Leader>{
    return this.http.get(baseURL + 'leadership?featured=true').pipe(map(leaders=>leaders[0])).pipe(
      catchError(this.processHTTPMsgService.handleError)
    );
  }


  
}
