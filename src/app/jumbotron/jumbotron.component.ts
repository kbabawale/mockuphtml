import { Component, OnInit } from '@angular/core';

interface Quote {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor() {

  }

  quotes: Quote[] = [];
  currentQuote: Quote = this.quotes[0];
  counter: number = 0;

  ngOnInit(): void {
    this.quotes = [
      {
        name: 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing',
        imageUrl: '../../assets/images/man.png'
      },
      {
        name: 'Quote 2',
        imageUrl: '../../assets/images/womanslide.jpeg'
      },
      {
        name: 'Quote 3',
        imageUrl: '../../assets/images/womanslide2.png'
      }
    ];
    setInterval(() => {

      if (this.counter < this.quotes.length) {
        this.currentQuote = this.quotes[this.counter];

        this.counter === this.quotes.length - 1 ? this.counter = 0 : this.counter++;
      }
    }, 3000);
  }

}
