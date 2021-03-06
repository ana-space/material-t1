import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './../dialog-example/dialog-example.component';

@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent implements OnInit {
  constructor (private snackBar: MatSnackBar, public dialog: MatDialog ) {}
  title = 'material-t1';
  notification = 0;
  opened= true;
  opened_1= true;
  log(status) {
    console.log(status)
  }
  toggle(vall) {
    console.log(vall);
    this.opened_1 = !vall;
    setTimeout((vall) => {
      this.opened_1 = !this.opened_1;
    }, 500);
  }

  // logChange(index) {
  //   console.log(index)
  // }

  // form field
  selectValue: string;
  optgroup1: string;
  optgroup2: string;

  // autocomplete
  autoComOptions: string[] = ['Angular', 'Node', 'PHP', 'JS'];
  autoComOptionsObjs = [
    {language: 'Node', db:'Mongodb', server: 'Express'},
    {language: 'java', db:'Sql', server:'apache'}
  ]
  displayFun(subject) {
    return subject ? subject.db : undefined; 
  }

  // Forms Controal  
  ops;
  myControal = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControal.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.autoComOptions.filter(autoComOption =>
      autoComOption.toLowerCase().includes(filterValue))
  }
  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, {duration:2000});
    snackBarRef.afterDismissed().subscribe((sn) => {
      console.log('afterDismissed' + sn); console.log('snack bar been closed!');
    })
    snackBarRef.onAction().subscribe((sna) => {
      console.log('onAction' + sna); console.log('snack bar action was triggered!')
    })
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSbackBarComponent, {duration: 2000})
  }

  // dialog 
  openDialog() {

    let dialogvar = this.dialog.open(DialogExampleComponent, {data: {name: 'Vishwas'}}); 
    dialogvar.afterClosed().subscribe(data => {
      console.log('data: ' + data);
    })
  }

}

// this componet is custom content 
@Component({
  selector:'custom-snackbar',
  template: `<span style="coloe: orenge;">Custom snackbar</span>`
})

export class CustomSbackBarComponent {}
