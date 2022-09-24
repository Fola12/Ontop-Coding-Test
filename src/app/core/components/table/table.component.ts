import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() GridData: any[]= [];
  @Input() ColData: any[] = [];
  @Input() Actions:any[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  goTo(event: Event) {
    event.preventDefault();
    event.stopPropagation();
   
  };
}
