import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Feedback } from '../models/feedback/feedback';
import { baseURL } from '../shared/baseUrl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient,  private processHTTPMsgService:ProcessHttpmsgService) { }

  submitFeedback(feedback:Feedback):Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback', feedback, httpOptions).pipe(
      catchError(this.processHTTPMsgService.handleError)
    );
  }
}
