import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // news:any;
  NewsList: any;
  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {

    this.newsService.getNews().subscribe((res) => {
      console.log(res.status);
      let result = res;
      this.NewsList = result.articles;
    }, (err) => {
      console.log(err);

    }
    )




    // fetch("https://newsapi.org/v2/everything?q=politics&apiKey=c04a3da440664a539b1dc6029677640e")
    // .then((res)=>{
    //   return res.json();
    // })
    // .then((result)=>{
    //  console.log(result["articles"][0]);
    // //  this.news= result["articles"][0];
    //  this.NewsList=result["articles"];

    // })
    // .catch((err)=>{
    //   console.log(err);

    // })

  }

}
