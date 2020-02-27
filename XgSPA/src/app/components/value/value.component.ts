import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarteService } from 'src/app/_services/carte/carte.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private carteService: CarteService) { }

  ngOnInit() {
    this.getValues();
    console.log(this.getValues());

  }

  getValues() {
    this.values = this.carteService.getValues();
  }

}
