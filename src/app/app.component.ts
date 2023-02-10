import { ColDef } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  rowData: any[] = [];
  columnDefs: ColDef[] = [];

  constructor() { }
   
  ngOnInit(): void {
    this.setColumns();
    this.getData();
  }

  setColumns() {
    this.columnDefs = [
      {field: 'id', hide: true},
      {field: 'firstName'},
      {field: 'lastName'},
      {field: 'email', headerName: 'Email'},
      {field: 'phoneNo', headerName: 'Phone Number'}
    ];
  }

  getData() {
    this.rowData.push(...[
      {id : '1', firstName : 'Yash', lastName : 'Bhalodiya', email : 'yash.bhalodiya@gmail.com',phoneNo : '8866459335'},
      {id : '2', firstName : 'Nitin', lastName : 'Patel', email : 'nitin.patel@gmail.com',phoneNo : '8160446225'},
      {id : '3', firstName : 'Keval', lastName : 'Joshi', email : 'keval.joshi@gmail.com',phoneNo : '8160446553'}
    ]);
  }

  onEdit($event: any) {
    console.log($event);
  }

  onDelete($event: any) {
    console.log($event);
  }
}