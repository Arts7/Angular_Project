import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: Order =new Order();
  constructor() { }
  onSubmit() {
    console.log(this.model);
  }
  ngOnInit() {
  }

}

