import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDisplayFlexComponent } from './table-display-flex/table-display-flex.component'
import { MatComponent } from './mat/mat.component'
import { MatSsComponent } from './mat-ss/mat-ss.component'
import { WidgetDataComponent } from './widget-data/widget-data.component';


const routes: Routes = [
  {path: 'mat', component: MatComponent },
  {path: 'mat-ss', component: MatSsComponent},
  {path :'table', component: TableDisplayFlexComponent},
  {path: 'widgets', component: WidgetDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
