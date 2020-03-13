import { Component, OnInit } from '@angular/core';
// import { IData, ILinksItem } from './../data/interface-domain-b';
// import { IRootObjectB } from './../data/domain-b'
import { _widgets } from './../data/widgets_';
import { IItemsItem } from './../data/interface';

import { WidgetsitemService } from './../widgetsitem.service'
@Component({
  selector: 'app-widget-data',
  templateUrl: './widget-data.component.html',
  styleUrls: ['./widget-data.component.css']
})
export class WidgetDataComponent implements OnInit {


  public loading = true;
  public errorMsg:string;
  public successMsg: string; // 

  // dataSource: IItemsItem[] = _widgets.data.items;
  dataSource: IItemsItem[];
  displayedColumns: string[]= ["id", "title", "kind", "Status", "updated_at", "created_at"];
  color = 'accent';
  checked;
  disabled;
  dataModify;
  
  constructor(private WItem : WidgetsitemService) { }
  
  changed(){
    console.log(this.checked)
  }

  statusChange(checked) {
    if(checked) {
      this.dataModify.status = 1;
     }
    console.log(this.dataModify);
  }
  ngOnInit(): void {
    this.WItem.getWidgets().subscribe(
      (widgetsItems)=> {
        this.dataSource = widgetsItems;
        this.dataModify = widgetsItems;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      }); 
  }

}
