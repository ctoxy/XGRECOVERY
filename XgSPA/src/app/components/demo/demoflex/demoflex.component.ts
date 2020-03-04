import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoflex',
  templateUrl: './demoflex.component.html',
  styleUrls: ['./demoflex.component.scss']
})
export class DemoflexComponent implements OnInit {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
