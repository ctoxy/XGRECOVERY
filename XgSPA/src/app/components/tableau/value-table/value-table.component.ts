import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CarteService } from 'src/app/_services/carte/carte.service';

@Component({
  selector: 'app-value-table',
  templateUrl: './value-table.component.html',
  styleUrls: ['./value-table.component.scss']
})
export class ValueTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'SESSION_ID', 'CLS', 'ROLLNO', 'STD_NM', 'FATH_NM', 'PERCENT'];
  // dataSource: MatTableDataSource<any>;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  /*for adding color to the row */
  selectedRow: boolean;

  constructor(private carteService: CarteService) {

  }

  ngOnInit() {
    /*this.dataSource = new MatTableDataSource(this.carteService.getData());*/
    return this.carteService.getValues().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('ced', this.dataSource.data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /*ajout de selection de la row en surbrillance*/
  onRowClicked(row) {

    if(!this.selectedRow)
    {
      this.selectedRow = row;
    }
    else
    {
      this.selectedRow = row;
    }

 }
}

