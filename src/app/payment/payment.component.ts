import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  imageUrl : string = "../../assets/images/tickmark.png";
  constructor() { }

  ngOnInit() {
  }

}
