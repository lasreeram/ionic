import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.page.html',
  styleUrls: ['./orderdetail.page.scss'],
})
export class OrderdetailPage implements OnInit {

  order = {
    "description":  "Order description",
    "address_1": "1120",
    "address_2": "565 Sherbourne Street",
    "city": "Toronto",
    "state": "ON",
    "zip": "M4X1W7"
  }

  constructor() { }

  ngOnInit() {
  }

}
