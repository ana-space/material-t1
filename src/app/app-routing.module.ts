import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDisplayFlexComponent } from './table-display-flex/table-display-flex.component'
import { MatComponent } from './mat/mat.component'


const routes: Routes = [
  {path: 'mat', component: MatComponent },
  {path :'table', component: TableDisplayFlexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
