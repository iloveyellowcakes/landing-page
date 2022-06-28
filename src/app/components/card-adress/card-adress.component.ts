import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card-adress',
  templateUrl: './card-adress.component.html',
  styleUrls: ['./card-adress.component.scss']
})
export class CardAdressComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    center: true,
    items: 3,
    loop: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2
      },



    }
  };

  ngOnInit() {
  }

}
