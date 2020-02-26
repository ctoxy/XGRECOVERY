import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Value } from '../../../model/value.model';
import { CarteService } from 'src/app/_services/carte.service';
@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})



export class ExampleTableComponent implements  OnInit {

  dataSource =  new ValueDataSource(this.carteService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  constructor(private carteService: CarteService) {}
  ngOnInit() {

  }


}

export class ValueDataSource extends DataSource<any> {
  constructor(private carteService: CarteService) {
    super();
  }

  connect(): Observable<Value[]>{
    return this.carteService.getValues();
  }

  disconnect() {}

}
