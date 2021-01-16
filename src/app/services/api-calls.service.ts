import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  resUrl:string;
  constructor(private http:HttpClient) {}

  getInsult(){
    return this.http.get("/insult/generate_insult.php?lang=en&type=json");
  }
  getQuote(){
    return this.http.get("/quote/api/qotd")
  }
}
