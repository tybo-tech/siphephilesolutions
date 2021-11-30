import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  sendGeneralTextEmail(data: Email): Observable<any> {
    return this.http.post<any>(`https://siphephilesolutions.co.za/api/api/email/general-email.php`, data);
  }
 

}


export interface Email {
  Type?: string;
  From?: string;
  Email: string;
  Subject: string;
  Message: string;
  Link?: string;
  LinkLabel?: string;
  UserFullName?: string;
  Name?: string;
  Amount?: number;
  AmountPaid?: number;
  AmountDue?: number;
  NextBillingDate?: string;
}