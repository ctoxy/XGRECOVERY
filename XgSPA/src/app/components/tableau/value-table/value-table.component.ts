import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CarteService } from 'src/app/_services/carte.service';

@Component({
  selector: 'app-value-table',
  templateUrl: './value-table.component.html',
  styleUrls: ['./value-table.component.scss']
})
export class ValueTableComponent implements OnInit {

  displayedColumns: string[] = ['SESSION_ID', 'CLS', 'ROLLNO', 'STD_NM', 'FATH_NM', 'PERCENT'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private carteService: CarteService) {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.carteService.getData());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log('ced', this.dataSource);


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

