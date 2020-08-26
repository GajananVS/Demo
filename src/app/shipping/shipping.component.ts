import { Component, OnInit } from '@angular/core';
import { shippingPrice } from '../products';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  constructor() { }
  shippingPrice = shippingPrice;
  ngOnInit(): void {
  }
}
