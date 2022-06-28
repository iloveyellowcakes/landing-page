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
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1000: {
        items: 4
      },


    }
  };
}


