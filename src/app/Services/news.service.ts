import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getNews():Observable<any>
  {

    return this.httpClient.get<any>("https://newsapi.org/v2/everything?q=politics&apiKey=c04a3da440664a539b1dc6029677640e")

  }

  likenews()
  {

  }

  likedNews()
  {

  }
}
