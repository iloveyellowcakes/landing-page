import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    responsive: {
      200: {
        items: 2
      },
      400: {
        items: 2
      },
      500: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      },
      1400: {
        items: 5
      },
      1800: {
        items: 6
      },


    }
  };
}


