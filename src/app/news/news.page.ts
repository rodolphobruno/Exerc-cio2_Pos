import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private image : string;
  private description : string;
  private message : string;

  constructor() { 
    this.image = "/assets/images/red_bull_racing_2019.jpg";  
    this.description = "This is a Red Bull Racing F1 - 2019";
    this.message = "Drivers: Max Verstappen and Alexander Albon"
  }

  ngOnInit() {
  }

}
