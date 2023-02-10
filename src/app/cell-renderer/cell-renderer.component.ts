import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-renderer',
  templateUrl: './cell-renderer.component.html',
  styleUrls: ['./cell-renderer.component.scss']
})
export class CellRendererComponent implements OnInit {
  
  params: any;

  constructor() { }

  agInit(params:any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }

  onAddAction() {
    const data = {
      action: 'add',
      rowData: this.params.node.data
    }
    this.params.onClick(data);
  }

  onEditAction() {
    const data = {
      action: 'edit',
      rowData: this.params.node.data
    }
    this.params.onClick(data);
  }

  onDeleteAction() {
    const data = {
      action: 'delete',
      rowData: this.params.node.data
    }
    this.params.onClick(data);
  }
}
