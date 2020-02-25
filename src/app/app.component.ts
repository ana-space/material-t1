  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
