import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {DashboardCounts, Hcp, User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  apiUrl = environment.url;
  commonUrl = environment.commonurl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  getUnApprovedList(): any{
    return this.http.get<Hcp[]>(`${this.apiUrl}/hcp/notapproved`);
  }

  checkLogin(user: User): any{
    const API_URL = `${this.apiUrl}/user/login`;
    return this.http.post(API_URL, user)
      .pipe(
        catchError(this.error)
      );
   }

  updateHcp(hcp: Hcp): Observable<any> {
    const API_URL = `${this.apiUrl}/hcp/${hcp.hcpId}`;
    return this.http.put(API_URL, hcp).pipe(
      catchError(this.error)
    );
  }

  registerUser(value: any): Observable<any> {
    const API_URL = `${this.apiUrl}/user/save`;
    return this.http.post(API_URL, value)
      .pipe(
        catchError(this.error)
      );
  }

  error(error: HttpErrorResponse): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // tslint:disable-next-line:variable-name
  sendConfirmationMail(local_data: Hcp): any {
    const req =  {email: local_data.email, remarks: local_data.isApproved, type: local_data.action };
    const API_URL = `${this.commonUrl}/email/hcpApproval`;
    return this.http.post(API_URL, req)
        .pipe(
          catchError(this.error)
        );
    }

  getDashboardCount(): any {
    return this.http.get<DashboardCounts>(`${this.apiUrl}/hcp/counts`);
  }
}
