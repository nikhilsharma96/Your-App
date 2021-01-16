import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private service:ApiCallsService) { }
  icon=["&#128521;","&#128519;"]
  insult;
  quote;
  showModal=false;
  result:string;
  ngOnInit(): void {
    this.insult=this.service.getInsult();
    this.quote=this.service.getQuote();
  }
  showSomething(value:string){
    if(value=='quote'){
      this.quote.subscribe((data)=>{this.result=data["quote"].body});
    }
    else{
      this.insult.subscribe((data)=>{this.result=data["insult"]});
    }
  }
}
