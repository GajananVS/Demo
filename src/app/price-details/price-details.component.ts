import { Component, OnInit } from '@angular/core';
import { shippingPrice } from '../products';
@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.scss']
})
export class PriceDetailsComponent implements OnInit {

  constructor() { }
  shippingPrice = shippingPrice;
  ngOnInit(): void {
  }

}
