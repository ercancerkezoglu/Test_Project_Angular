import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from 'src/app/models/result';
import { User } from 'src/app/models/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DataservicesService } from 'src/app/services/dataservices.service';
import { SharedDataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-resultscreen',
  templateUrl: './resultscreen.component.html',
  styleUrls: ['./resultscreen.component.scss']
})
export class ResultscreenComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.listData.paginator = this.paginator;
  }

  listData: MatTableDataSource<any>
  displayedColumns: string[] = ['companyName', 'countryName', 'cityName', 'userName']
  constructor(private dataServices: DataservicesService, private sharedDataService: SharedDataService, private alertify: AlertifyService) {

  }

  ngOnInit(): void {
    this.getResults();
  }

  clickable() {
    this.alertify.success("You clicked Delegate Name Field...")
  }
  getResults() {
    this.listData = new MatTableDataSource(this.sharedDataService.getFilteredData());

  };

}




