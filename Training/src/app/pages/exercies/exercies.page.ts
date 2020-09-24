import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercies',
  templateUrl: './exercies.page.html',
  styleUrls: ['./exercies.page.scss'],
})
export class ExerciesPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(id);
  }

}
