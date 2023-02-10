import { CellRendererComponent } from './../cell-renderer/cell-renderer.component';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { ColDef, GridOptions} from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit, OnDestroy, OnChanges {

  @Input() rowData: any = [];
  @Input() columnDefs: ColDef[] = [];
  @Input() cssClass: string = '';
  @Input() addBtn: boolean = false;
  @Input() editBtn: boolean = false;
  @Input() deleteBtn: boolean = false;
  @Output() onAddEvent = new EventEmitter<any>();
  @Output() onEditEvent = new EventEmitter<any>();
  @Output() onDeleteEvent = new EventEmitter<any>();
  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
    domLayout: 'autoHeight',
    onGridReady: (params : any) => {
      this.intervalId = setInterval(() => {
        params.api.sizeColumnsToFit();
      }, 100);
    }
  };
  intervalId: any;

  defaultColDef = {
    sortable: true,
    filter: true,
    lockPosition : true,
  };

  constructor() { }

  ngOnInit(): void {
    // this.initTable();
    this.addExtraField();
  }

  ngOnChanges(){
    //your code to update the model
    this.addExtraField();
  }
  
  ngOnDestroy(): void {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  addExtraField() {
    const existing = this.columnDefs.find(x => x.field === 'action');
    if (existing === undefined) {
      this.columnDefs.push(
        {
          headerName: 'Action',
          field: 'action',
          sortable: false,
          filter : false,
          cellRendererFramework: CellRendererComponent,
          cellRendererParams: {
            onClick: this.actionEvent.bind(this),
            editBtn: this.editBtn,
            addBtn: this.addBtn,
            deleteBtn: this.deleteBtn
          },
        });
    }
  }

  actionEvent(event:any) {
    if(event.action === 'add') {
      this.onAddEvent.emit(event.rowData);
    }
    else if(event.action === 'edit') {
      this.onEditEvent.emit(event.rowData);
    }
    else if(event.action === 'delete') {
      this.onDeleteEvent.emit(event.rowData);
    }
  }

}
