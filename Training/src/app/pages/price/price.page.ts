import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.page.html',
  styleUrls: ['./price.page.scss'],
})
export class PricePage implements OnInit {
  movePlan = false;
  constructor() { }

  ngOnInit() {
  }

  changePlan() {
      this.movePlan = !this.movePlan;
  }

}
