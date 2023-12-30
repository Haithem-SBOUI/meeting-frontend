import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }

    };
  }


}
