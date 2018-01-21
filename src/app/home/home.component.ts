import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'home',
  template: `<h3>{{ message | async }}</h3>`
})
export class HomeComponent implements OnInit {
  public message: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.message = of('some async message').pipe(delay(2000))
  }
}