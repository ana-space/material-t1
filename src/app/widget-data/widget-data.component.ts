import { Component, OnInit } from '@angular/core';
// import { IData, ILinksItem } from './../data/interface-domain-b';
// import { IRootObjectB } from './../data/domain-b'
import { _widgets } from './../data/widgets_';
import { IItemsItem } from './../data/interface';
@Component({
  selector: 'app-widget-data',
  templateUrl: './widget-data.component.html',
  styleUrls: ['./widget-data.component.css']
})
export class WidgetDataComponent implements OnInit {

  dataSource: IItemsItem[] = _widgets.data.items;
  displayedColumns: string[]= ["id", "title", "kind", "Status", "updated_at", "created_at"];

  constructor() { }

  ngOnInit(): void {


  }

}
